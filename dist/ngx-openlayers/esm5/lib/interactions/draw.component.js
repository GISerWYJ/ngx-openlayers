/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { MapComponent } from '../map.component';
import { Draw } from 'ol/interaction';
import { Collection } from 'ol';
import { Vector } from 'ol/source';
import GeometryType from 'ol/geom/GeometryType';
import { GeometryFunction } from 'ol/interaction/Draw';
import { Condition } from 'ol/events/condition';
var DrawInteractionComponent = /** @class */ (function () {
    function DrawInteractionComponent(map) {
        this.map = map;
        this.onChange = new EventEmitter();
        this.onChangeActive = new EventEmitter();
        this.onDrawEnd = new EventEmitter();
        this.onDrawStart = new EventEmitter();
        this.onPropertyChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    DrawInteractionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.instance = new Draw(this);
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
        this.instance.on('drawend', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onDrawEnd.emit(event); }));
        this.instance.on('drawstart', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onDrawStart.emit(event); }));
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
    DrawInteractionComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.map.instance.removeInteraction(this.instance);
    };
    DrawInteractionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-interaction-draw',
                    template: '',
                },] },
    ];
    /** @nocollapse */
    DrawInteractionComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    DrawInteractionComponent.propDecorators = {
        clickTolerance: [{ type: Input }],
        features: [{ type: Input }],
        source: [{ type: Input }],
        snapTolerance: [{ type: Input }],
        type: [{ type: Input }],
        maxPoints: [{ type: Input }],
        minPoints: [{ type: Input }],
        finishCondition: [{ type: Input }],
        style: [{ type: Input }],
        geometryFunction: [{ type: Input }],
        geometryName: [{ type: Input }],
        condition: [{ type: Input }],
        freehandCondition: [{ type: Input }],
        freehand: [{ type: Input }],
        wrapX: [{ type: Input }],
        onChange: [{ type: Output }],
        onChangeActive: [{ type: Output }],
        onDrawEnd: [{ type: Output }],
        onDrawStart: [{ type: Output }],
        onPropertyChange: [{ type: Output }]
    };
    return DrawInteractionComponent;
}());
export { DrawInteractionComponent };
if (false) {
    /** @type {?} */
    DrawInteractionComponent.prototype.instance;
    /** @type {?} */
    DrawInteractionComponent.prototype.clickTolerance;
    /** @type {?} */
    DrawInteractionComponent.prototype.features;
    /** @type {?} */
    DrawInteractionComponent.prototype.source;
    /** @type {?} */
    DrawInteractionComponent.prototype.snapTolerance;
    /** @type {?} */
    DrawInteractionComponent.prototype.type;
    /** @type {?} */
    DrawInteractionComponent.prototype.maxPoints;
    /** @type {?} */
    DrawInteractionComponent.prototype.minPoints;
    /** @type {?} */
    DrawInteractionComponent.prototype.finishCondition;
    /** @type {?} */
    DrawInteractionComponent.prototype.style;
    /** @type {?} */
    DrawInteractionComponent.prototype.geometryFunction;
    /** @type {?} */
    DrawInteractionComponent.prototype.geometryName;
    /** @type {?} */
    DrawInteractionComponent.prototype.condition;
    /** @type {?} */
    DrawInteractionComponent.prototype.freehandCondition;
    /** @type {?} */
    DrawInteractionComponent.prototype.freehand;
    /** @type {?} */
    DrawInteractionComponent.prototype.wrapX;
    /** @type {?} */
    DrawInteractionComponent.prototype.onChange;
    /** @type {?} */
    DrawInteractionComponent.prototype.onChangeActive;
    /** @type {?} */
    DrawInteractionComponent.prototype.onDrawEnd;
    /** @type {?} */
    DrawInteractionComponent.prototype.onDrawStart;
    /** @type {?} */
    DrawInteractionComponent.prototype.onPropertyChange;
    /**
     * @type {?}
     * @private
     */
    DrawInteractionComponent.prototype.map;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9pbnRlcmFjdGlvbnMvZHJhdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBVyxNQUFNLElBQUksQ0FBQztBQUN6QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ25DLE9BQU8sWUFBWSxNQUFNLHNCQUFzQixDQUFDO0FBRWhELE9BQU8sRUFBYSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVoRDtJQWlERSxrQ0FBb0IsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztRQVZyQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUV6QyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFFL0MsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFFMUMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBRTVDLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7SUFFVCxDQUFDOzs7O0lBRXpDLDJDQUFROzs7SUFBUjtRQUFBLGlCQVFDO1FBUEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFROzs7O1FBQUUsVUFBQyxLQUFnQixJQUFLLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQXpCLENBQXlCLEVBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlOzs7O1FBQUUsVUFBQyxLQUFnQixJQUFLLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQS9CLENBQStCLEVBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUUsVUFBQyxLQUFnQixJQUFLLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQTFCLENBQTBCLEVBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXOzs7O1FBQUUsVUFBQyxLQUFnQixJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQTVCLENBQTRCLEVBQUMsQ0FBQztRQUNsRixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0I7Ozs7UUFBRSxVQUFDLEtBQWdCLElBQUssT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFqQyxDQUFpQyxFQUFDLENBQUM7UUFDNUYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7O0lBRUQsOENBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7O2dCQS9ERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsUUFBUSxFQUFFLEVBQUU7aUJBQ2I7Ozs7Z0JBYlEsWUFBWTs7O2lDQWlCbEIsS0FBSzsyQkFFTCxLQUFLO3lCQUVMLEtBQUs7Z0NBRUwsS0FBSzt1QkFFTCxLQUFLOzRCQUVMLEtBQUs7NEJBRUwsS0FBSztrQ0FFTCxLQUFLO3dCQUVMLEtBQUs7bUNBRUwsS0FBSzsrQkFFTCxLQUFLOzRCQUVMLEtBQUs7b0NBRUwsS0FBSzsyQkFFTCxLQUFLO3dCQUVMLEtBQUs7MkJBR0wsTUFBTTtpQ0FFTixNQUFNOzRCQUVOLE1BQU07OEJBRU4sTUFBTTttQ0FFTixNQUFNOztJQWtCVCwrQkFBQztDQUFBLEFBaEVELElBZ0VDO1NBNURZLHdCQUF3Qjs7O0lBQ25DLDRDQUFlOztJQUVmLGtEQUN3Qjs7SUFDeEIsNENBQytCOztJQUMvQiwwQ0FDZ0I7O0lBQ2hCLGlEQUN1Qjs7SUFDdkIsd0NBQ21COztJQUNuQiw2Q0FDbUI7O0lBQ25CLDZDQUNtQjs7SUFDbkIsbURBQzRCOztJQUM1Qix5Q0FDd0M7O0lBQ3hDLG9EQUNvQzs7SUFDcEMsZ0RBQ3NCOztJQUN0Qiw2Q0FDc0I7O0lBQ3RCLHFEQUM4Qjs7SUFDOUIsNENBQ21COztJQUNuQix5Q0FDZ0I7O0lBRWhCLDRDQUN5Qzs7SUFDekMsa0RBQytDOztJQUMvQyw2Q0FDMEM7O0lBQzFDLCtDQUM0Qzs7SUFDNUMsb0RBQ2lEOzs7OztJQUVyQyx1Q0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERyYXcgfSBmcm9tICdvbC9pbnRlcmFjdGlvbic7XHJcbmltcG9ydCB7IENvbGxlY3Rpb24sIEZlYXR1cmUgfSBmcm9tICdvbCc7XHJcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJ29sL3NvdXJjZSc7XHJcbmltcG9ydCBHZW9tZXRyeVR5cGUgZnJvbSAnb2wvZ2VvbS9HZW9tZXRyeVR5cGUnO1xyXG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gJ29sL3N0eWxlJztcclxuaW1wb3J0IHsgRHJhd0V2ZW50LCBHZW9tZXRyeUZ1bmN0aW9uIH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24vRHJhdyc7XHJcbmltcG9ydCB7IFN0eWxlRnVuY3Rpb24gfSBmcm9tICdvbC9zdHlsZS9TdHlsZSc7XHJcbmltcG9ydCB7IENvbmRpdGlvbiB9IGZyb20gJ29sL2V2ZW50cy9jb25kaXRpb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtaW50ZXJhY3Rpb24tZHJhdycsXHJcbiAgdGVtcGxhdGU6ICcnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHJhd0ludGVyYWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGluc3RhbmNlOiBEcmF3O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGNsaWNrVG9sZXJhbmNlPzogbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgZmVhdHVyZXM/OiBDb2xsZWN0aW9uPEZlYXR1cmU+O1xyXG4gIEBJbnB1dCgpXHJcbiAgc291cmNlPzogVmVjdG9yO1xyXG4gIEBJbnB1dCgpXHJcbiAgc25hcFRvbGVyYW5jZT86IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHR5cGU6IEdlb21ldHJ5VHlwZTtcclxuICBASW5wdXQoKVxyXG4gIG1heFBvaW50cz86IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIG1pblBvaW50cz86IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIGZpbmlzaENvbmRpdGlvbj86IENvbmRpdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIHN0eWxlPzogU3R5bGUgfCBTdHlsZVtdIHwgU3R5bGVGdW5jdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIGdlb21ldHJ5RnVuY3Rpb24/OiBHZW9tZXRyeUZ1bmN0aW9uO1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2VvbWV0cnlOYW1lPzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgY29uZGl0aW9uPzogQ29uZGl0aW9uO1xyXG4gIEBJbnB1dCgpXHJcbiAgZnJlZWhhbmRDb25kaXRpb24/OiBDb25kaXRpb247XHJcbiAgQElucHV0KClcclxuICBmcmVlaGFuZD86IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICB3cmFwWD86IGJvb2xlYW47XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEcmF3RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpXHJcbiAgb25DaGFuZ2VBY3RpdmUgPSBuZXcgRXZlbnRFbWl0dGVyPERyYXdFdmVudD4oKTtcclxuICBAT3V0cHV0KClcclxuICBvbkRyYXdFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPERyYXdFdmVudD4oKTtcclxuICBAT3V0cHV0KClcclxuICBvbkRyYXdTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhd0V2ZW50PigpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIG9uUHJvcGVydHlDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERyYXdFdmVudD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IERyYXcodGhpcyk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoZXZlbnQ6IERyYXdFdmVudCkgPT4gdGhpcy5vbkNoYW5nZS5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2U6YWN0aXZlJywgKGV2ZW50OiBEcmF3RXZlbnQpID0+IHRoaXMub25DaGFuZ2VBY3RpdmUuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbignZHJhd2VuZCcsIChldmVudDogRHJhd0V2ZW50KSA9PiB0aGlzLm9uRHJhd0VuZC5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdkcmF3c3RhcnQnLCAoZXZlbnQ6IERyYXdFdmVudCkgPT4gdGhpcy5vbkRyYXdTdGFydC5lbWl0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdwcm9wZXJ0eWNoYW5nZScsIChldmVudDogRHJhd0V2ZW50KSA9PiB0aGlzLm9uUHJvcGVydHlDaGFuZ2UuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iXX0=