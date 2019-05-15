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
export class ModifyInteractionComponent {
    /**
     * @param {?} map
     */
    constructor(map) {
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
    ngOnInit() {
        this.instance = new Modify(this);
        this.instance.on('change', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onChange.emit(event)));
        this.instance.on('change:active', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onChangeActive.emit(event)));
        this.instance.on('propertychange', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onPropertyChange.emit(event)));
        this.instance.on('modifyend', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onModifyEnd.emit(event)));
        this.instance.on('modifystart', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onModifyStart.emit(event)));
        this.map.instance.addInteraction(this.instance);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
}
ModifyInteractionComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-interaction-modify',
                template: '',
            },] },
];
/** @nocollapse */
ModifyInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kaWZ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2ludGVyYWN0aW9ucy9tb2RpZnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxVQUFVLEVBQVcsTUFBTSxJQUFJLENBQUM7QUFFekMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUduQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFNaEQsTUFBTSxPQUFPLDBCQUEwQjs7OztJQTZCckMsWUFBb0IsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztRQVZyQyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFlLENBQUM7UUFFOUMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBZSxDQUFDO1FBRWhELGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBZSxDQUFDO1FBRTNDLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUVqRCxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBZSxDQUFDO0lBRVgsQ0FBQzs7OztJQUV6QyxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFROzs7O1FBQUUsQ0FBQyxLQUFrQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGVBQWU7Ozs7UUFBRSxDQUFDLEtBQWtCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUM7UUFDM0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCOzs7O1FBQUUsQ0FBQyxLQUFrQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUM7UUFDOUYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVzs7OztRQUFFLENBQUMsS0FBa0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxhQUFhOzs7O1FBQUUsQ0FBQyxLQUFrQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7O1lBL0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxRQUFRLEVBQUUsRUFBRTthQUNiOzs7O1lBWlEsWUFBWTs7O3dCQWdCbEIsS0FBSzs4QkFFTCxLQUFLOzZCQUVMLEtBQUs7b0JBRUwsS0FBSzt1QkFFTCxLQUFLO29CQUVMLEtBQUs7cUJBRUwsS0FBSzswQkFHTCxNQUFNOzRCQUVOLE1BQU07dUJBRU4sTUFBTTs2QkFFTixNQUFNOytCQUVOLE1BQU07Ozs7SUF6QlAsOENBQWlCOztJQUVqQiwrQ0FDc0I7O0lBQ3RCLHFEQUM0Qjs7SUFDNUIsb0RBQ3dCOztJQUN4QiwyQ0FDd0M7O0lBQ3hDLDhDQUM4Qjs7SUFDOUIsMkNBQ2dCOztJQUNoQiw0Q0FDZ0I7O0lBRWhCLGlEQUM4Qzs7SUFDOUMsbURBQ2dEOztJQUNoRCw4Q0FDMkM7O0lBQzNDLG9EQUNpRDs7SUFDakQsc0RBQ21EOzs7OztJQUV2Qyx5Q0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1vZGlmeSB9IGZyb20gJ29sL2ludGVyYWN0aW9uJztcclxuaW1wb3J0IHsgQ29sbGVjdGlvbiwgRmVhdHVyZSB9IGZyb20gJ29sJztcclxuaW1wb3J0IHsgU3R5bGUgfSBmcm9tICdvbC9zdHlsZSc7XHJcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJ29sL3NvdXJjZSc7XHJcbmltcG9ydCB7IE1vZGlmeUV2ZW50IH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24vTW9kaWZ5JztcclxuaW1wb3J0IHsgU3R5bGVGdW5jdGlvbiB9IGZyb20gJ29sL3N0eWxlL1N0eWxlJztcclxuaW1wb3J0IHsgQ29uZGl0aW9uIH0gZnJvbSAnb2wvZXZlbnRzL2NvbmRpdGlvbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1pbnRlcmFjdGlvbi1tb2RpZnknLFxyXG4gIHRlbXBsYXRlOiAnJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1vZGlmeUludGVyYWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGluc3RhbmNlOiBNb2RpZnk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgY29uZGl0aW9uPzogQ29uZGl0aW9uO1xyXG4gIEBJbnB1dCgpXHJcbiAgZGVsZXRlQ29uZGl0aW9uPzogQ29uZGl0aW9uO1xyXG4gIEBJbnB1dCgpXHJcbiAgcGl4ZWxUb2xlcmFuY2U/OiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBzdHlsZT86IFN0eWxlIHwgU3R5bGVbXSB8IFN0eWxlRnVuY3Rpb247XHJcbiAgQElucHV0KClcclxuICBmZWF0dXJlczogQ29sbGVjdGlvbjxGZWF0dXJlPjtcclxuICBASW5wdXQoKVxyXG4gIHdyYXBYPzogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIHNvdXJjZT86IFZlY3RvcjtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgb25Nb2RpZnlFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPE1vZGlmeUV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIG9uTW9kaWZ5U3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPE1vZGlmeUV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxNb2RpZnlFdmVudD4oKTtcclxuICBAT3V0cHV0KClcclxuICBvbkNoYW5nZUFjdGl2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8TW9kaWZ5RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpXHJcbiAgb25Qcm9wZXJ0eUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TW9kaWZ5RXZlbnQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBNb2RpZnkodGhpcyk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoZXZlbnQ6IE1vZGlmeUV2ZW50KSA9PiB0aGlzLm9uQ2hhbmdlLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZTphY3RpdmUnLCAoZXZlbnQ6IE1vZGlmeUV2ZW50KSA9PiB0aGlzLm9uQ2hhbmdlQWN0aXZlLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3Byb3BlcnR5Y2hhbmdlJywgKGV2ZW50OiBNb2RpZnlFdmVudCkgPT4gdGhpcy5vblByb3BlcnR5Q2hhbmdlLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ21vZGlmeWVuZCcsIChldmVudDogTW9kaWZ5RXZlbnQpID0+IHRoaXMub25Nb2RpZnlFbmQuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbignbW9kaWZ5c3RhcnQnLCAoZXZlbnQ6IE1vZGlmeUV2ZW50KSA9PiB0aGlzLm9uTW9kaWZ5U3RhcnQuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iXX0=