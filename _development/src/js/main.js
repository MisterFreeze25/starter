/* Do JS only when DOM is FULL CHARGED */
import { ready } from './helpers/document-ready';

import { smoothScroll } from './smooth-scroll';
import { setIntersectionObserver } from './helpers/intersection-observer';
import { toggleBurgerMenu } from './hamburgers';
import { setupAnimations } from './animations';

ready(function() {
  /* Animations */
  setupAnimations();

  /* Setup */
  smoothScroll();
  toggleBurgerMenu();
});
