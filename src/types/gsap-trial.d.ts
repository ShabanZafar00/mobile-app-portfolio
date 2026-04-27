declare module "gsap-trial/SplitText" {
  export class SplitText {
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    constructor(
      target: string | string[] | Element | Element[] | NodeListOf<Element>,
      vars?: Record<string, unknown>
    );
    revert(): void;
  }
}
