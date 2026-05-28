"use client";

import { useEffect } from "react";

const wordJoiningHyphenPattern = /([A-Za-z0-9])-(?=[A-Za-z0-9])/g;
const ignoredTextContainers = "script, style, noscript, textarea, input, code, pre";

function normaliseTextNode(node: Text) {
  const current = node.nodeValue;
  if (!current || !wordJoiningHyphenPattern.test(current)) return;

  wordJoiningHyphenPattern.lastIndex = 0;
  const next = current.replace(wordJoiningHyphenPattern, "$1\u2011");
  if (next !== current) node.nodeValue = next;
}

function shouldIgnoreTextNode(node: Text) {
  const parent = node.parentElement;
  return parent ? Boolean(parent.closest(ignoredTextContainers)) : false;
}

function normaliseTree(root: Node) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      return shouldIgnoreTextNode(node as Text) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
    },
  });

  const nodes: Text[] = [];
  let next = walker.nextNode();
  while (next) {
    nodes.push(next as Text);
    next = walker.nextNode();
  }

  nodes.forEach(normaliseTextNode);
}

export function NoWordBreaks() {
  useEffect(() => {
    normaliseTree(document.body);

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "characterData") {
          normaliseTextNode(mutation.target as Text);
          continue;
        }

        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            normaliseTextNode(node as Text);
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            normaliseTree(node);
          }
        });
      }
    });

    observer.observe(document.body, {
      characterData: true,
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
