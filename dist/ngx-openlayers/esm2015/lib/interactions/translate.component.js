/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Translate } from 'ol/interaction';
import { Collection } from 'ol';
import { MapComponent } from '../map.component';
export class TranslateInteractionComponent {
    /**
     * @param {?} map
     */
    constructor(map) {
        this.map = map;
        this.onChange = new EventEmitter();
        this.onPropertyChange = new EventEmitter();
        this.onTranslateEnd = new EventEmitter();
        this.onTranslateStart = new EventEmitter();
        this.onTranslating = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = new Translate(this);
        this.instance.on('change', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onChange.emit(event)));
        this.instance.on('propertychange', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onPropertyChange.emit(event)));
        this.instance.on('translateend', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onTranslateEnd.emit(event)));
        this.instance.on('translatestart', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onTranslateStart.emit(event)));
        this.instance.on('translating', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onTranslating.emit(event)));
        this.map.instance.addInteraction(this.instance);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
}
TranslateInteractionComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-interaction-translate',
                template: '',
            },] },
];
/** @nocollapse */
TranslateInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
TranslateInteractionComponent.propDecorators = {
    features: [{ type: Input }],
    layers: [{ type: Input }],
    hitTolerance: [{ type: Input }],
    onChange: [{ type: Output }],
    onPropertyChange: [{ type: Output }],
    onTranslateEnd: [{ type: Output }],
    onTranslateStart: [{ type: Output }],
    onTranslating: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    TranslateInteractionComponent.prototype.instance;
    /** @type {?} */
    TranslateInteractionComponent.prototype.features;
    /** @type {?} */
    TranslateInteractionComponent.prototype.layers;
    /** @type {?} */
    TranslateInteractionComponent.prototype.hitTolerance;
    /** @type {?} */
    TranslateInteractionComponent.prototype.onChange;
    /** @type {?} */
    TranslateInteractionComponent.prototype.onPropertyChange;
    /** @type {?} */
    TranslateInteractionComponent.prototype.onTranslateEnd;
    /** @type {?} */
    TranslateInteractionComponent.prototype.onTranslateStart;
    /** @type {?} */
    TranslateInteractionComponent.prototype.onTranslating;
    /**
     * @type {?}
     * @private
     */
    TranslateInteractionComponent.prototype.map;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2ludGVyYWN0aW9ucy90cmFuc2xhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBVyxNQUFNLElBQUksQ0FBQztBQUd6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFNaEQsTUFBTSxPQUFPLDZCQUE2Qjs7OztJQXFCeEMsWUFBb0IsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksWUFBWSxFQUFrQixDQUFDO1FBQ25ELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBa0IsQ0FBQztRQUMzRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksWUFBWSxFQUFrQixDQUFDO1FBQ3pELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBa0IsQ0FBQztRQUMzRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksWUFBWSxFQUFrQixDQUFDO0lBQzFELENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVwQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFROzs7O1FBQUUsQ0FBQyxLQUFxQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGdCQUFnQjs7OztRQUFFLENBQUMsS0FBcUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDO1FBQ2pHLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGNBQWM7Ozs7UUFBRSxDQUFDLEtBQXFCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUM7UUFDN0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCOzs7O1FBQUUsQ0FBQyxLQUFxQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUM7UUFDakcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsYUFBYTs7OztRQUFFLENBQUMsS0FBcUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQztRQUUzRixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7OztZQS9DRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsUUFBUSxFQUFFLEVBQUU7YUFDYjs7OztZQUxRLFlBQVk7Ozt1QkFTbEIsS0FBSztxQkFFTCxLQUFLOzJCQUVMLEtBQUs7dUJBR0wsTUFBTTsrQkFFTixNQUFNOzZCQUVOLE1BQU07K0JBRU4sTUFBTTs0QkFFTixNQUFNOzs7O0lBakJQLGlEQUFvQjs7SUFFcEIsaURBQytCOztJQUMvQiwrQ0FDK0M7O0lBQy9DLHFEQUNzQjs7SUFFdEIsaURBQ3VDOztJQUN2Qyx5REFDK0M7O0lBQy9DLHVEQUM2Qzs7SUFDN0MseURBQytDOztJQUMvQyxzREFDNEM7Ozs7O0lBRWhDLDRDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGUgfSBmcm9tICdvbC9pbnRlcmFjdGlvbic7XHJcbmltcG9ydCB7IENvbGxlY3Rpb24sIEZlYXR1cmUgfSBmcm9tICdvbCc7XHJcbmltcG9ydCB7IExheWVyIH0gZnJvbSAnb2wvbGF5ZXInO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVFdmVudCB9IGZyb20gJ29sL2ludGVyYWN0aW9uL1RyYW5zbGF0ZSc7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtaW50ZXJhY3Rpb24tdHJhbnNsYXRlJyxcclxuICB0ZW1wbGF0ZTogJycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVJbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBpbnN0YW5jZTogVHJhbnNsYXRlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGZlYXR1cmVzPzogQ29sbGVjdGlvbjxGZWF0dXJlPjtcclxuICBASW5wdXQoKVxyXG4gIGxheWVycz86IExheWVyW10gfCAoKGxheWVyOiBMYXllcikgPT4gYm9vbGVhbik7XHJcbiAgQElucHV0KClcclxuICBoaXRUb2xlcmFuY2U/OiBudW1iZXI7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8VHJhbnNsYXRlRXZlbnQ+O1xyXG4gIEBPdXRwdXQoKVxyXG4gIG9uUHJvcGVydHlDaGFuZ2U6IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGVFdmVudD47XHJcbiAgQE91dHB1dCgpXHJcbiAgb25UcmFuc2xhdGVFbmQ6IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGVFdmVudD47XHJcbiAgQE91dHB1dCgpXHJcbiAgb25UcmFuc2xhdGVTdGFydDogRXZlbnRFbWl0dGVyPFRyYW5zbGF0ZUV2ZW50PjtcclxuICBAT3V0cHV0KClcclxuICBvblRyYW5zbGF0aW5nOiBFdmVudEVtaXR0ZXI8VHJhbnNsYXRlRXZlbnQ+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGVFdmVudD4oKTtcclxuICAgIHRoaXMub25Qcm9wZXJ0eUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8VHJhbnNsYXRlRXZlbnQ+KCk7XHJcbiAgICB0aGlzLm9uVHJhbnNsYXRlRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGVFdmVudD4oKTtcclxuICAgIHRoaXMub25UcmFuc2xhdGVTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8VHJhbnNsYXRlRXZlbnQ+KCk7XHJcbiAgICB0aGlzLm9uVHJhbnNsYXRpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPFRyYW5zbGF0ZUV2ZW50PigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFRyYW5zbGF0ZSh0aGlzKTtcclxuXHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoZXZlbnQ6IFRyYW5zbGF0ZUV2ZW50KSA9PiB0aGlzLm9uQ2hhbmdlLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3Byb3BlcnR5Y2hhbmdlJywgKGV2ZW50OiBUcmFuc2xhdGVFdmVudCkgPT4gdGhpcy5vblByb3BlcnR5Q2hhbmdlLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3RyYW5zbGF0ZWVuZCcsIChldmVudDogVHJhbnNsYXRlRXZlbnQpID0+IHRoaXMub25UcmFuc2xhdGVFbmQuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbigndHJhbnNsYXRlc3RhcnQnLCAoZXZlbnQ6IFRyYW5zbGF0ZUV2ZW50KSA9PiB0aGlzLm9uVHJhbnNsYXRlU3RhcnQuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbigndHJhbnNsYXRpbmcnLCAoZXZlbnQ6IFRyYW5zbGF0ZUV2ZW50KSA9PiB0aGlzLm9uVHJhbnNsYXRpbmcuZW1pdChldmVudCkpO1xyXG5cclxuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZEludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIl19