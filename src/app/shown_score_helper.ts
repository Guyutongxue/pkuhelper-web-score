class ShownScoreHelper {
  #shownScore: string[] = [];
  #pending: string[] | null = null;

  constructor() {
    try {
      this.#shownScore = JSON.parse(localStorage['SCORE_SHOWN'] ?? '[]');
    } catch (e) {
      console.error(e);
    }
  }
  get() {
    return this.#shownScore;
  }
  set(s: string[]) {
    this.#pending = s;
    if (!this.#shownScore.length) this.apply();
  }
  apply() {
    if (this.#pending !== null) {
      this.#shownScore = this.#pending;
      localStorage['SCORE_SHOWN'] = JSON.stringify(this.#pending);
    }
  }
  clear() {
    this.#shownScore = [];
    this.#pending = null;
    localStorage['SCORE_SHOWN'] = JSON.stringify([]);
  }
}

export const shownScoreHelper = new ShownScoreHelper();
