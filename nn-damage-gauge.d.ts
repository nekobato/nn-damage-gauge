/// <reference types="node" />
import { LitElement } from 'lit';
export declare class NNDamageGauge extends LitElement {
    hp: number;
    step: number;
    undead: boolean;
    get value(): number;
    set value(value: number);
    gauge: number;
    active: boolean;
    shakeInterval?: NodeJS.Timeout;
    dead: boolean;
    protected addDamage(): void;
    protected shake(): void;
    resurrect(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'nn-damage-bar': NNDamageGauge;
    }
}
//# sourceMappingURL=nn-damage-gauge.d.ts.map