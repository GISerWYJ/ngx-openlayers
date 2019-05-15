/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MapComponent } from '../map.component';
import { Select } from 'ol/interaction';
import { Collection } from 'ol';
import { FilterFunction } from 'ol/interaction/Select';
import { Condition } from 'ol/events/condition';
var SelectInteractionComponent = /** @class */ (function () {
    function SelectInteractionComponent(map) {
        this.map = map;
        this.onChange = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onPropertyChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    SelectInteractionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.instance = new Select(this);
        this.instance.on('change', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onChange.emit(event); }));
        this.instance.on('select', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onSelect.emit(event); }));
        this.instance.on('propertychange', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onPropertyChange.emit(event); }));
        this.map.instance.addInteraction(this.instance);
    };
    /**
     * @return {?}
     */
    SelectInteractionComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.map.instance.removeInteraction(this.instance);
    };
    SelectInteractionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-interaction-select',
                    template: '',
                },] },
    ];
    /** @nocollapse */
    SelectInteractionComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    SelectInteractionComponent.propDecorators = {
        addCondition: [{ type: Input }],
        condition: [{ type: Input }],
        layers: [{ type: Input }],
        style: [{ type: Input }],
        removeCondition: [{ type: Input }],
        toggleCondition: [{ type: Input }],
        multi: [{ type: Input }],
        features: [{ type: Input }],
        filter: [{ type: Input }],
        wrapX: [{ type: Input }],
        onChange: [{ type: Output }],
        onSelect: [{ type: Output }],
        onPropertyChange: [{ type: Output }]
    };
    return SelectInteractionComponent;
}());
export { SelectInteractionComponent };
if (false) {
    /** @type {?} */
    SelectInteractionComponent.prototype.instance;
    /** @type {?} */
    SelectInteractionComponent.prototype.addCondition;
    /** @type {?} */
    SelectInteractionComponent.prototype.condition;
    /** @type {?} */
    SelectInteractionComponent.prototype.layers;
    /** @type {?} */
    SelectInteractionComponent.prototype.style;
    /** @type {?} */
    SelectInteractionComponent.prototype.removeCondition;
    /** @type {?} */
    SelectInteractionComponent.prototype.toggleCondition;
    /** @type {?} */
    SelectInteractionComponent.prototype.multi;
    /** @type {?} */
    SelectInteractionComponent.prototype.features;
    /** @type {?} */
    SelectInteractionComponent.prototype.filter;
    /** @type {?} */
    SelectInteractionComponent.prototype.wrapX;
    /** @type {?} */
    SelectInteractionComponent.prototype.onChange;
    /** @type {?} */
    SelectInteractionComponent.prototype.onSelect;
    /** @type {?} */
    SelectInteractionComponent.prototype.onPropertyChange;
    /**
     * @type {?}
     * @private
     */
    SelectInteractionComponent.prototype.map;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2ludGVyYWN0aW9ucy9zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3hDLE9BQU8sRUFBRSxVQUFVLEVBQVcsTUFBTSxJQUFJLENBQUM7QUFDekMsT0FBTyxFQUFlLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXBFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVoRDtJQW1DRSxvQ0FBb0IsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztRQU5yQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUUzQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUUzQyxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBZSxDQUFDO0lBRVgsQ0FBQzs7OztJQUV6Qyw2Q0FBUTs7O0lBQVI7UUFBQSxpQkFRQztRQVBDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUTs7OztRQUFFLFVBQUMsS0FBa0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUF6QixDQUF5QixFQUFDLENBQUM7UUFDOUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUTs7OztRQUFFLFVBQUMsS0FBa0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUF6QixDQUF5QixFQUFDLENBQUM7UUFDOUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCOzs7O1FBQUUsVUFBQyxLQUFrQixJQUFLLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBakMsQ0FBaUMsRUFBQyxDQUFDO1FBRTlGLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7OztJQUVELGdEQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyRCxDQUFDOztnQkFqREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLFFBQVEsRUFBRSxFQUFFO2lCQUNiOzs7O2dCQVpRLFlBQVk7OzsrQkFnQmxCLEtBQUs7NEJBRUwsS0FBSzt5QkFFTCxLQUFLO3dCQUVMLEtBQUs7a0NBRUwsS0FBSztrQ0FFTCxLQUFLO3dCQUVMLEtBQUs7MkJBRUwsS0FBSzt5QkFFTCxLQUFLO3dCQUVMLEtBQUs7MkJBR0wsTUFBTTsyQkFFTixNQUFNO21DQUVOLE1BQU07O0lBa0JULGlDQUFDO0NBQUEsQUFsREQsSUFrREM7U0E5Q1ksMEJBQTBCOzs7SUFDckMsOENBQWlCOztJQUVqQixrREFDeUI7O0lBQ3pCLCtDQUNzQjs7SUFDdEIsNENBQytDOztJQUMvQywyQ0FDd0M7O0lBQ3hDLHFEQUM0Qjs7SUFDNUIscURBQzRCOztJQUM1QiwyQ0FDZ0I7O0lBQ2hCLDhDQUMrQjs7SUFDL0IsNENBQ3dCOztJQUN4QiwyQ0FDZ0I7O0lBRWhCLDhDQUMyQzs7SUFDM0MsOENBQzJDOztJQUMzQyxzREFDbUQ7Ozs7O0lBRXZDLHlDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xyXG5pbXBvcnQgeyBMYXllciB9IGZyb20gJ29sL2xheWVyJztcclxuaW1wb3J0IHsgU3R5bGUgfSBmcm9tICdvbC9zdHlsZSc7XHJcbmltcG9ydCB7IENvbGxlY3Rpb24sIEZlYXR1cmUgfSBmcm9tICdvbCc7XHJcbmltcG9ydCB7IFNlbGVjdEV2ZW50LCBGaWx0ZXJGdW5jdGlvbiB9IGZyb20gJ29sL2ludGVyYWN0aW9uL1NlbGVjdCc7XHJcbmltcG9ydCB7IFN0eWxlRnVuY3Rpb24gfSBmcm9tICdvbC9zdHlsZS9TdHlsZSc7XHJcbmltcG9ydCB7IENvbmRpdGlvbiB9IGZyb20gJ29sL2V2ZW50cy9jb25kaXRpb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtaW50ZXJhY3Rpb24tc2VsZWN0JyxcclxuICB0ZW1wbGF0ZTogJycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RJbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBpbnN0YW5jZTogU2VsZWN0O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGFkZENvbmRpdGlvbj86IENvbmRpdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIGNvbmRpdGlvbj86IENvbmRpdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIGxheWVycz86IExheWVyW10gfCAoKGxheWVyOiBMYXllcikgPT4gYm9vbGVhbik7XHJcbiAgQElucHV0KClcclxuICBzdHlsZT86IFN0eWxlIHwgU3R5bGVbXSB8IFN0eWxlRnVuY3Rpb247XHJcbiAgQElucHV0KClcclxuICByZW1vdmVDb25kaXRpb24/OiBDb25kaXRpb247XHJcbiAgQElucHV0KClcclxuICB0b2dnbGVDb25kaXRpb24/OiBDb25kaXRpb247XHJcbiAgQElucHV0KClcclxuICBtdWx0aT86IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICBmZWF0dXJlcz86IENvbGxlY3Rpb248RmVhdHVyZT47XHJcbiAgQElucHV0KClcclxuICBmaWx0ZXI/OiBGaWx0ZXJGdW5jdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIHdyYXBYPzogYm9vbGVhbjtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFNlbGVjdEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIG9uU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxTZWxlY3RFdmVudD4oKTtcclxuICBAT3V0cHV0KClcclxuICBvblByb3BlcnR5Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxTZWxlY3RFdmVudD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFNlbGVjdCh0aGlzKTtcclxuXHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoZXZlbnQ6IFNlbGVjdEV2ZW50KSA9PiB0aGlzLm9uQ2hhbmdlLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3NlbGVjdCcsIChldmVudDogU2VsZWN0RXZlbnQpID0+IHRoaXMub25TZWxlY3QuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbigncHJvcGVydHljaGFuZ2UnLCAoZXZlbnQ6IFNlbGVjdEV2ZW50KSA9PiB0aGlzLm9uUHJvcGVydHlDaGFuZ2UuZW1pdChldmVudCkpO1xyXG5cclxuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZEludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIl19