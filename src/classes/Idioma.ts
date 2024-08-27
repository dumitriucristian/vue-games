export default class Idioma {
    handleSelect(event: Event) {
      const target = event.target as HTMLElement;
      const number = target.getAttribute('data-number');
      console.log(number);
    }
  }