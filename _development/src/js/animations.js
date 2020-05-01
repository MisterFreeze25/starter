import { setIntersectionObserver } from './helpers/intersection-observer';

export const setupAnimations = () => {
  if (document.querySelector('.references-block') !== null) {
    setIntersectionObserver('.references-block', element => {
      element.classList.add('is-in-viewport');
    });
  }

  if (document.querySelector('.team--block') !== null) {
    setIntersectionObserver('.team--block', element => {
      element.classList.add('is-in-viewport');
    });
  }

  if (document.querySelector('.thematic-block__item') !== null) {
    setIntersectionObserver('.thematic-block__item', element => {
      element.classList.add('is-in-viewport');
    });
  }

  if (document.querySelector('.team--archive') !== null) {
    setIntersectionObserver('.team__item', element => {
      element.classList.add('is-in-viewport');
    });
  }

  if (document.querySelector('.content--column-block') !== null) {
    setIntersectionObserver('.column-block', element => {
      element.classList.add('is-in-viewport');
    });
  }

  if (document.querySelector('.job--archive .job__item') !== null) {
    setIntersectionObserver('.job__item', element => {
      element.classList.add('is-in-viewport');
    });
  }

  if (document.querySelector('.main-header > .thematics-menu') !== null) {
    document
      .querySelectorAll('.main-header > .thematics-menu .menu-item')
      .forEach(item => {
        if (!item.classList.contains('current_page_item')) {
          item.addEventListener('mouseenter', function() {
            item.style.color = item.getAttribute('data-color');
          });

          item.addEventListener('mouseout', function() {
            item.style.color = 'inherit';
          });
        } else {
          item.classList.add('is-loaded');
        }
      });
  }
};
