import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('nn-damage-gauge')
export class NNDamageGauge extends LitElement {
  @property({ type: Number }) hp: number = 100;
  @property({ type: Number }) step: number = 5;
  @property({ type: Boolean }) undead: boolean = false;
  @property({ type: Number })
  get value() {
    return this.gauge;
  }
  set value(value) {
    this.gauge = value;
  }
  @state() gauge: number = 100;
  @state() active: boolean = false;
  @state() shakeInterval?: NodeJS.Timeout;
  @state() dead = false;

  protected addDamage() {
    this.gauge = this.gauge - (this.gauge < this.step ? this.gauge : this.step);
    this.shake();
    if (this.gauge <= 0 && !this.undead) {
      this.dead = true;
    }
    this.requestUpdate();
  }

  protected shake() {
    if (this.shakeInterval) {
      clearInterval(this.shakeInterval);
    }
    this.active = true;
    let frame = 8;
    const container = this.shadowRoot!.querySelector(
      '#container'
    ) as HTMLDivElement;
    this.shakeInterval = setInterval(() => {
      frame -= 1;
      if (frame < 0) {
        if (this.shakeInterval) {
          clearInterval(this.shakeInterval);
        }
        this.active = false;
        this.requestUpdate();
      }

      if (frame > 4) {
        container!.style.transform = `translate3d(${Math.random() * 3}px,
          ${Math.random() * 3}px,
          ${Math.random() * 2}px)`;
      }
    }, 60);
  }

  public resurrect() {
    this.gauge = this.hp;
    this.dead = false;
    this.requestUpdate();
  }

  render() {
    const currentDamage = 100 - (this.gauge / this.hp) * 100;
    return html`
      <style>
        .gauge-container {
          position: relative;
          cursor: pointer;
        }
        .gauge-container.dead .content {
          animation: 0.4s ease-out 0s 1 forwards dead;
        }
        .gauge {
          display: inline-flex;
          position: absolute;
          top: -6px;
          right: -50%;
          border: 2px solid #fff;
          border-width: 2px 3px;
          border-radius: 4px;
          background: rgba(0, 0, 0, 0.72);
          width: 100px;
          height: 12px;
          overflow: hidden;
          box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.48);
          visibility: hidden;
        }
        .gauge.active {
          visibility: visible;
        }
        .current {
          width: 100%;
          height: 100%;
          background: #f93131;
          border-radius: 2px;
        }
        .sub {
          border-radius: 1px;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #fff;
          transition: transform 0.6s ease-out;
        }
        @keyframes dead {
          0% {
            opacity: 1;
            filter: blur(0);
          }
          100% {
            opacity: 0;
            filter: blur(4px);
          }
        }
      </style>
      <div
        id="container"
        class=${classMap({ 'gauge-container': true, dead: this.dead })}
      >
        <div class=${classMap({ gauge: true, active: this.active })}>
          <div
            class="sub"
            style="transform: translate(-${currentDamage}%)"
          ></div>
          <div
            class="current"
            style="transform: translate(-${currentDamage}%)"
          ></div>
        </div>
        <div class="content" @click=${this.addDamage} tabindex="0">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nn-damage-bar': NNDamageGauge;
  }
}
