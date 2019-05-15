/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Translate } from 'ol/interaction';
import { Collection } from 'ol';
import { MapComponent } from '../map.component';
var TranslateInteractionComponent = /** @class */ (function () {
    function TranslateInteractionComponent(map) {
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
    TranslateInteractionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.instance = new Translate(this);
        this.instance.on('change', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onChange.emit(event); }));
        this.instance.on('propertychange', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onPropertyChange.emit(event); }));
        this.instance.on('translateend', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onTranslateEnd.emit(event); }));
        this.instance.on('translatestart', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onTranslateStart.emit(event); }));
        this.instance.on('translating', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onTranslating.emit(event); }));
        this.map.instance.addInteraction(this.instance);
    };
    /**
     * @return {?}
     */
    TranslateInteractionComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.map.instance.removeInteraction(this.instance);
    };
    TranslateInteractionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-interaction-translate',
                    template: '',
                },] },
    ];
    /** @nocollapse */
    TranslateInteractionComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
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
    return TranslateInteractionComponent;
}());
export { TranslateInteractionComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2ludGVyYWN0aW9ucy90cmFuc2xhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBVyxNQUFNLElBQUksQ0FBQztBQUd6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFaEQ7SUF5QkUsdUNBQW9CLEdBQWlCO1FBQWpCLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFlBQVksRUFBa0IsQ0FBQztRQUNuRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQWtCLENBQUM7UUFDM0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLFlBQVksRUFBa0IsQ0FBQztRQUN6RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQWtCLENBQUM7UUFDM0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLFlBQVksRUFBa0IsQ0FBQztJQUMxRCxDQUFDOzs7O0lBRUQsZ0RBQVE7OztJQUFSO1FBQUEsaUJBVUM7UUFUQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXBDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVE7Ozs7UUFBRSxVQUFDLEtBQXFCLElBQUssT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBekIsQ0FBeUIsRUFBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGdCQUFnQjs7OztRQUFFLFVBQUMsS0FBcUIsSUFBSyxPQUFBLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQWpDLENBQWlDLEVBQUMsQ0FBQztRQUNqRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxjQUFjOzs7O1FBQUUsVUFBQyxLQUFxQixJQUFLLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQS9CLENBQStCLEVBQUMsQ0FBQztRQUM3RixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0I7Ozs7UUFBRSxVQUFDLEtBQXFCLElBQUssT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFqQyxDQUFpQyxFQUFDLENBQUM7UUFDakcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsYUFBYTs7OztRQUFFLFVBQUMsS0FBcUIsSUFBSyxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUE5QixDQUE4QixFQUFDLENBQUM7UUFFM0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7O0lBRUQsbURBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7O2dCQS9DRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsUUFBUSxFQUFFLEVBQUU7aUJBQ2I7Ozs7Z0JBTFEsWUFBWTs7OzJCQVNsQixLQUFLO3lCQUVMLEtBQUs7K0JBRUwsS0FBSzsyQkFHTCxNQUFNO21DQUVOLE1BQU07aUNBRU4sTUFBTTttQ0FFTixNQUFNO2dDQUVOLE1BQU07O0lBMEJULG9DQUFDO0NBQUEsQUFoREQsSUFnREM7U0E1Q1ksNkJBQTZCOzs7SUFDeEMsaURBQW9COztJQUVwQixpREFDK0I7O0lBQy9CLCtDQUMrQzs7SUFDL0MscURBQ3NCOztJQUV0QixpREFDdUM7O0lBQ3ZDLHlEQUMrQzs7SUFDL0MsdURBQzZDOztJQUM3Qyx5REFDK0M7O0lBQy9DLHNEQUM0Qzs7Ozs7SUFFaEMsNENBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZSB9IGZyb20gJ29sL2ludGVyYWN0aW9uJztcclxuaW1wb3J0IHsgQ29sbGVjdGlvbiwgRmVhdHVyZSB9IGZyb20gJ29sJztcclxuaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICdvbC9sYXllcic7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZUV2ZW50IH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24vVHJhbnNsYXRlJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1pbnRlcmFjdGlvbi10cmFuc2xhdGUnLFxyXG4gIHRlbXBsYXRlOiAnJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZUludGVyYWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGluc3RhbmNlOiBUcmFuc2xhdGU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZmVhdHVyZXM/OiBDb2xsZWN0aW9uPEZlYXR1cmU+O1xyXG4gIEBJbnB1dCgpXHJcbiAgbGF5ZXJzPzogTGF5ZXJbXSB8ICgobGF5ZXI6IExheWVyKSA9PiBib29sZWFuKTtcclxuICBASW5wdXQoKVxyXG4gIGhpdFRvbGVyYW5jZT86IG51bWJlcjtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGVFdmVudD47XHJcbiAgQE91dHB1dCgpXHJcbiAgb25Qcm9wZXJ0eUNoYW5nZTogRXZlbnRFbWl0dGVyPFRyYW5zbGF0ZUV2ZW50PjtcclxuICBAT3V0cHV0KClcclxuICBvblRyYW5zbGF0ZUVuZDogRXZlbnRFbWl0dGVyPFRyYW5zbGF0ZUV2ZW50PjtcclxuICBAT3V0cHV0KClcclxuICBvblRyYW5zbGF0ZVN0YXJ0OiBFdmVudEVtaXR0ZXI8VHJhbnNsYXRlRXZlbnQ+O1xyXG4gIEBPdXRwdXQoKVxyXG4gIG9uVHJhbnNsYXRpbmc6IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGVFdmVudD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFRyYW5zbGF0ZUV2ZW50PigpO1xyXG4gICAgdGhpcy5vblByb3BlcnR5Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGVFdmVudD4oKTtcclxuICAgIHRoaXMub25UcmFuc2xhdGVFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPFRyYW5zbGF0ZUV2ZW50PigpO1xyXG4gICAgdGhpcy5vblRyYW5zbGF0ZVN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGVFdmVudD4oKTtcclxuICAgIHRoaXMub25UcmFuc2xhdGluZyA9IG5ldyBFdmVudEVtaXR0ZXI8VHJhbnNsYXRlRXZlbnQ+KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVHJhbnNsYXRlKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZScsIChldmVudDogVHJhbnNsYXRlRXZlbnQpID0+IHRoaXMub25DaGFuZ2UuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbigncHJvcGVydHljaGFuZ2UnLCAoZXZlbnQ6IFRyYW5zbGF0ZUV2ZW50KSA9PiB0aGlzLm9uUHJvcGVydHlDaGFuZ2UuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbigndHJhbnNsYXRlZW5kJywgKGV2ZW50OiBUcmFuc2xhdGVFdmVudCkgPT4gdGhpcy5vblRyYW5zbGF0ZUVuZC5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCd0cmFuc2xhdGVzdGFydCcsIChldmVudDogVHJhbnNsYXRlRXZlbnQpID0+IHRoaXMub25UcmFuc2xhdGVTdGFydC5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCd0cmFuc2xhdGluZycsIChldmVudDogVHJhbnNsYXRlRXZlbnQpID0+IHRoaXMub25UcmFuc2xhdGluZy5lbWl0KGV2ZW50KSk7XHJcblxyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iXX0=