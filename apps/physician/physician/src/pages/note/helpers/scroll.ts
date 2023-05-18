import _isNil from "lodash/isNil";

import { logger } from "../../../api";
import { SukiAgentSize, SukiAgentSizeVsPixels } from "../../../constants";

/**
 * Returns the paragraph element that currently has the focus on
 * @param {*} event Any valid html events
 * @returns {HTMLElement} Paragraph element that currently has the focus on
 */
const getElementToBeScrolled = () => {
  try {
    // Get the current position of the caret using getSelection
    // Reference: https://developer.mozilla.org/en-US/docs/Web/API/Window/getSelection
    const selectionNode = window.getSelection();
    const focusNode = selectionNode?.focusNode;

    // All content inside the editor is wrapped inside <p>(paragraph) elements with data-block-type attribute
    // If the content is empty the focusNode will be the <p>(paragraph)
    if (focusNode?.nodeType === Node.TEXT_NODE) {
      const parentNode = focusNode?.parentNode as HTMLElement;
      const closestNode = parentNode?.closest("p");
      return closestNode;
    } else {
      return focusNode;
    }
  } catch (error) {
    logger.error({ message: "Error computing scrollable element", payload: error });
    return null;
  }
};

/**
 * Scrolls the window to bring the cursor into the center of viewport
 * @param {*} agentSize Size of an agent
 */
const handleContentFocus = (agentSize: SukiAgentSize) => {
  try {
    const EFFECTIVE_BADGE_HEIGHT = SukiAgentSizeVsPixels[agentSize];

    const elementToBeScrolled = getElementToBeScrolled() as HTMLElement;
    if (_isNil(elementToBeScrolled)) {
      return;
    }

    // NOTE: Currently we get the text node where the cursor is active, which can span into multiple
    // lines. Here we consider the bottom of the entire node and not the exact cursor position.
    const selection = window.getSelection() as any;
    let bottomCursorPosition = 0;
    if (selection?.rangeCount > 0) {
      const range = selection?.getRangeAt(0);
      bottomCursorPosition = range?.getBoundingClientRect().bottom;
    }
    
    const viewableHeightExcludingAgent = window.innerHeight - EFFECTIVE_BADGE_HEIGHT;

    // We need to scroll the content only if the element falls below the Agent's starting position
    if (bottomCursorPosition > viewableHeightExcludingAgent) {
      // Finding the scrollable note container
      const noteContainerElement = elementToBeScrolled.closest(
        'div[data-cy="note-container-scrollable"]'
      ) as HTMLElement;

      // Calculating the center of the viewport
      const viewPortCenter = Math.round(window.innerHeight / 2);

      // If the viewport center is below the agent starting position then we scroll to agent starting
      // point else we scroll to the center of viewport
      const scrollToHeight =
        viewPortCenter < viewableHeightExcludingAgent ? viewPortCenter : viewableHeightExcludingAgent;

      // Computing the amount of height to be scrolled
      const scrollTopAmount = bottomCursorPosition - scrollToHeight;
      noteContainerElement.scrollBy({
        top: scrollTopAmount,
        left: 0,
        behavior: "smooth"
      });
    }
  } catch (error) {
    logger.error({ message: "Error scrolling content into viewport", payload: error });
  }
};

export { handleContentFocus };
