/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MapComponent } from '../map.component';
import { Modify } from 'ol/interaction';
import { Collection } from 'ol';
import { Vector } from 'ol/source';
import { Condition } from 'ol/events/condition';
var ModifyInteractionComponent = /** @class */ (function () {
    function ModifyInteractionComponent(map) {
        this.map = map;
        this.onModifyEnd = new EventEmitter();
        this.onModifyStart = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onChangeActive = new EventEmitter();
        this.onPropertyChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ModifyInteractionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.instance = new Modify(this);
        this.instance.on('change', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onChange.emit(event); }));
        this.instance.on('change:active', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onChangeActive.emit(event); }));
        this.instance.on('propertychange', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onPropertyChange.emit(event); }));
        this.instance.on('modifyend', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onModifyEnd.emit(event); }));
        this.instance.on('modifystart', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onModifyStart.emit(event); }));
        this.map.instance.addInteraction(this.instance);
    };
    /**
     * @return {?}
     */
    ModifyInteractionComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.map.instance.removeInteraction(this.instance);
    };
    ModifyInteractionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-interaction-modify',
                    template: '',
                },] },
    ];
    /** @nocollapse */
    ModifyInteractionComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    ModifyInteractionComponent.propDecorators = {
        condition: [{ type: Input }],
        deleteCondition: [{ type: Input }],
        pixelTolerance: [{ type: Input }],
        style: [{ type: Input }],
        features: [{ type: Input }],
        wrapX: [{ type: Input }],
        source: [{ type: Input }],
        onModifyEnd: [{ type: Output }],
        onModifyStart: [{ type: Output }],
        onChange: [{ type: Output }],
        onChangeActive: [{ type: Output }],
        onPropertyChange: [{ type: Output }]
    };
    return ModifyInteractionComponent;
}());
export { ModifyInteractionComponent };
if (false) {
    /** @type {?} */
    ModifyInteractionComponent.prototype.instance;
    /** @type {?} */
    ModifyInteractionComponent.prototype.condition;
    /** @type {?} */
    ModifyInteractionComponent.prototype.deleteCondition;
    /** @type {?} */
    ModifyInteractionComponent.prototype.pixelTolerance;
    /** @type {?} */
    ModifyInteractionComponent.prototype.style;
    /** @type {?} */
    ModifyInteractionComponent.prototype.features;
    /** @type {?} */
    ModifyInteractionComponent.prototype.wrapX;
    /** @type {?} */
    ModifyInteractionComponent.prototype.source;
    /** @type {?} */
    ModifyInteractionComponent.prototype.onModifyEnd;
    /** @type {?} */
    ModifyInteractionComponent.prototype.onModifyStart;
    /** @type {?} */
    ModifyInteractionComponent.prototype.onChange;
    /** @type {?} */
    ModifyInteractionComponent.prototype.onChangeActive;
    /** @type {?} */
    ModifyInteractionComponent.prototype.onPropertyChange;
    /**
     * @type {?}
     * @private
     */
    ModifyInteractionComponent.prototype.map;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kaWZ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2ludGVyYWN0aW9ucy9tb2RpZnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxVQUFVLEVBQVcsTUFBTSxJQUFJLENBQUM7QUFFekMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUduQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFaEQ7SUFpQ0Usb0NBQW9CLEdBQWlCO1FBQWpCLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFWckMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBZSxDQUFDO1FBRTlDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUVoRCxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUUzQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFlLENBQUM7UUFFakQscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztJQUVYLENBQUM7Ozs7SUFFekMsNkNBQVE7OztJQUFSO1FBQUEsaUJBUUM7UUFQQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVE7Ozs7UUFBRSxVQUFDLEtBQWtCLElBQUssT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBekIsQ0FBeUIsRUFBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGVBQWU7Ozs7UUFBRSxVQUFDLEtBQWtCLElBQUssT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBL0IsQ0FBK0IsRUFBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGdCQUFnQjs7OztRQUFFLFVBQUMsS0FBa0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQWpDLENBQWlDLEVBQUMsQ0FBQztRQUM5RixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXOzs7O1FBQUUsVUFBQyxLQUFrQixJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQTVCLENBQTRCLEVBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxhQUFhOzs7O1FBQUUsVUFBQyxLQUFrQixJQUFLLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQTlCLENBQThCLEVBQUMsQ0FBQztRQUN4RixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFFRCxnREFBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Z0JBL0NGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxRQUFRLEVBQUUsRUFBRTtpQkFDYjs7OztnQkFaUSxZQUFZOzs7NEJBZ0JsQixLQUFLO2tDQUVMLEtBQUs7aUNBRUwsS0FBSzt3QkFFTCxLQUFLOzJCQUVMLEtBQUs7d0JBRUwsS0FBSzt5QkFFTCxLQUFLOzhCQUdMLE1BQU07Z0NBRU4sTUFBTTsyQkFFTixNQUFNO2lDQUVOLE1BQU07bUNBRU4sTUFBTTs7SUFrQlQsaUNBQUM7Q0FBQSxBQWhERCxJQWdEQztTQTVDWSwwQkFBMEI7OztJQUNyQyw4Q0FBaUI7O0lBRWpCLCtDQUNzQjs7SUFDdEIscURBQzRCOztJQUM1QixvREFDd0I7O0lBQ3hCLDJDQUN3Qzs7SUFDeEMsOENBQzhCOztJQUM5QiwyQ0FDZ0I7O0lBQ2hCLDRDQUNnQjs7SUFFaEIsaURBQzhDOztJQUM5QyxtREFDZ0Q7O0lBQ2hELDhDQUMyQzs7SUFDM0Msb0RBQ2lEOztJQUNqRCxzREFDbUQ7Ozs7O0lBRXZDLHlDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTW9kaWZ5IH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xyXG5pbXBvcnQgeyBDb2xsZWN0aW9uLCBGZWF0dXJlIH0gZnJvbSAnb2wnO1xyXG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gJ29sL3N0eWxlJztcclxuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnb2wvc291cmNlJztcclxuaW1wb3J0IHsgTW9kaWZ5RXZlbnQgfSBmcm9tICdvbC9pbnRlcmFjdGlvbi9Nb2RpZnknO1xyXG5pbXBvcnQgeyBTdHlsZUZ1bmN0aW9uIH0gZnJvbSAnb2wvc3R5bGUvU3R5bGUnO1xyXG5pbXBvcnQgeyBDb25kaXRpb24gfSBmcm9tICdvbC9ldmVudHMvY29uZGl0aW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWludGVyYWN0aW9uLW1vZGlmeScsXHJcbiAgdGVtcGxhdGU6ICcnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9kaWZ5SW50ZXJhY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgaW5zdGFuY2U6IE1vZGlmeTtcclxuXHJcbiAgQElucHV0KClcclxuICBjb25kaXRpb24/OiBDb25kaXRpb247XHJcbiAgQElucHV0KClcclxuICBkZWxldGVDb25kaXRpb24/OiBDb25kaXRpb247XHJcbiAgQElucHV0KClcclxuICBwaXhlbFRvbGVyYW5jZT86IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHN0eWxlPzogU3R5bGUgfCBTdHlsZVtdIHwgU3R5bGVGdW5jdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIGZlYXR1cmVzOiBDb2xsZWN0aW9uPEZlYXR1cmU+O1xyXG4gIEBJbnB1dCgpXHJcbiAgd3JhcFg/OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgc291cmNlPzogVmVjdG9yO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBvbk1vZGlmeUVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8TW9kaWZ5RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpXHJcbiAgb25Nb2RpZnlTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8TW9kaWZ5RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpXHJcbiAgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE1vZGlmeUV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIG9uQ2hhbmdlQWN0aXZlID0gbmV3IEV2ZW50RW1pdHRlcjxNb2RpZnlFdmVudD4oKTtcclxuICBAT3V0cHV0KClcclxuICBvblByb3BlcnR5Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxNb2RpZnlFdmVudD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IE1vZGlmeSh0aGlzKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZScsIChldmVudDogTW9kaWZ5RXZlbnQpID0+IHRoaXMub25DaGFuZ2UuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlOmFjdGl2ZScsIChldmVudDogTW9kaWZ5RXZlbnQpID0+IHRoaXMub25DaGFuZ2VBY3RpdmUuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbigncHJvcGVydHljaGFuZ2UnLCAoZXZlbnQ6IE1vZGlmeUV2ZW50KSA9PiB0aGlzLm9uUHJvcGVydHlDaGFuZ2UuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbignbW9kaWZ5ZW5kJywgKGV2ZW50OiBNb2RpZnlFdmVudCkgPT4gdGhpcy5vbk1vZGlmeUVuZC5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdtb2RpZnlzdGFydCcsIChldmVudDogTW9kaWZ5RXZlbnQpID0+IHRoaXMub25Nb2RpZnlTdGFydC5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==