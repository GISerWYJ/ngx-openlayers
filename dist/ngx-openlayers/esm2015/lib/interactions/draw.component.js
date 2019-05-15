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
export class DrawInteractionComponent {
    /**
     * @param {?} map
     */
    constructor(map) {
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
    ngOnInit() {
        this.instance = new Draw(this);
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
        this.instance.on('drawend', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onDrawEnd.emit(event)));
        this.instance.on('drawstart', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onDrawStart.emit(event)));
        this.instance.on('propertychange', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onPropertyChange.emit(event)));
        this.map.instance.addInteraction(this.instance);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
}
DrawInteractionComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-interaction-draw',
                template: '',
            },] },
];
/** @nocollapse */
DrawInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9pbnRlcmFjdGlvbnMvZHJhdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBVyxNQUFNLElBQUksQ0FBQztBQUN6QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ25DLE9BQU8sWUFBWSxNQUFNLHNCQUFzQixDQUFDO0FBRWhELE9BQU8sRUFBYSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQU1oRCxNQUFNLE9BQU8sd0JBQXdCOzs7O0lBNkNuQyxZQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBVnJDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBRXpDLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUUvQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUUxQyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFFNUMscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztJQUVULENBQUM7Ozs7SUFFekMsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUTs7OztRQUFFLENBQUMsS0FBZ0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlOzs7O1FBQUUsQ0FBQyxLQUFnQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBRSxDQUFDLEtBQWdCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUM7UUFDOUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVzs7OztRQUFFLENBQUMsS0FBZ0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQztRQUNsRixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0I7Ozs7UUFBRSxDQUFDLEtBQWdCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQztRQUM1RixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7OztZQS9ERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsUUFBUSxFQUFFLEVBQUU7YUFDYjs7OztZQWJRLFlBQVk7Ozs2QkFpQmxCLEtBQUs7dUJBRUwsS0FBSztxQkFFTCxLQUFLOzRCQUVMLEtBQUs7bUJBRUwsS0FBSzt3QkFFTCxLQUFLO3dCQUVMLEtBQUs7OEJBRUwsS0FBSztvQkFFTCxLQUFLOytCQUVMLEtBQUs7MkJBRUwsS0FBSzt3QkFFTCxLQUFLO2dDQUVMLEtBQUs7dUJBRUwsS0FBSztvQkFFTCxLQUFLO3VCQUdMLE1BQU07NkJBRU4sTUFBTTt3QkFFTixNQUFNOzBCQUVOLE1BQU07K0JBRU4sTUFBTTs7OztJQXpDUCw0Q0FBZTs7SUFFZixrREFDd0I7O0lBQ3hCLDRDQUMrQjs7SUFDL0IsMENBQ2dCOztJQUNoQixpREFDdUI7O0lBQ3ZCLHdDQUNtQjs7SUFDbkIsNkNBQ21COztJQUNuQiw2Q0FDbUI7O0lBQ25CLG1EQUM0Qjs7SUFDNUIseUNBQ3dDOztJQUN4QyxvREFDb0M7O0lBQ3BDLGdEQUNzQjs7SUFDdEIsNkNBQ3NCOztJQUN0QixxREFDOEI7O0lBQzlCLDRDQUNtQjs7SUFDbkIseUNBQ2dCOztJQUVoQiw0Q0FDeUM7O0lBQ3pDLGtEQUMrQzs7SUFDL0MsNkNBQzBDOztJQUMxQywrQ0FDNEM7O0lBQzVDLG9EQUNpRDs7Ozs7SUFFckMsdUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEcmF3IH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xyXG5pbXBvcnQgeyBDb2xsZWN0aW9uLCBGZWF0dXJlIH0gZnJvbSAnb2wnO1xyXG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICdvbC9zb3VyY2UnO1xyXG5pbXBvcnQgR2VvbWV0cnlUeXBlIGZyb20gJ29sL2dlb20vR2VvbWV0cnlUeXBlJztcclxuaW1wb3J0IHsgU3R5bGUgfSBmcm9tICdvbC9zdHlsZSc7XHJcbmltcG9ydCB7IERyYXdFdmVudCwgR2VvbWV0cnlGdW5jdGlvbiB9IGZyb20gJ29sL2ludGVyYWN0aW9uL0RyYXcnO1xyXG5pbXBvcnQgeyBTdHlsZUZ1bmN0aW9uIH0gZnJvbSAnb2wvc3R5bGUvU3R5bGUnO1xyXG5pbXBvcnQgeyBDb25kaXRpb24gfSBmcm9tICdvbC9ldmVudHMvY29uZGl0aW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWludGVyYWN0aW9uLWRyYXcnLFxyXG4gIHRlbXBsYXRlOiAnJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIERyYXdJbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBpbnN0YW5jZTogRHJhdztcclxuXHJcbiAgQElucHV0KClcclxuICBjbGlja1RvbGVyYW5jZT86IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIGZlYXR1cmVzPzogQ29sbGVjdGlvbjxGZWF0dXJlPjtcclxuICBASW5wdXQoKVxyXG4gIHNvdXJjZT86IFZlY3RvcjtcclxuICBASW5wdXQoKVxyXG4gIHNuYXBUb2xlcmFuY2U/OiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICB0eXBlOiBHZW9tZXRyeVR5cGU7XHJcbiAgQElucHV0KClcclxuICBtYXhQb2ludHM/OiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBtaW5Qb2ludHM/OiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBmaW5pc2hDb25kaXRpb24/OiBDb25kaXRpb247XHJcbiAgQElucHV0KClcclxuICBzdHlsZT86IFN0eWxlIHwgU3R5bGVbXSB8IFN0eWxlRnVuY3Rpb247XHJcbiAgQElucHV0KClcclxuICBnZW9tZXRyeUZ1bmN0aW9uPzogR2VvbWV0cnlGdW5jdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIGdlb21ldHJ5TmFtZT86IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGNvbmRpdGlvbj86IENvbmRpdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIGZyZWVoYW5kQ29uZGl0aW9uPzogQ29uZGl0aW9uO1xyXG4gIEBJbnB1dCgpXHJcbiAgZnJlZWhhbmQ/OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgd3JhcFg/OiBib29sZWFuO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhd0V2ZW50PigpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIG9uQ2hhbmdlQWN0aXZlID0gbmV3IEV2ZW50RW1pdHRlcjxEcmF3RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpXHJcbiAgb25EcmF3RW5kID0gbmV3IEV2ZW50RW1pdHRlcjxEcmF3RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpXHJcbiAgb25EcmF3U3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPERyYXdFdmVudD4oKTtcclxuICBAT3V0cHV0KClcclxuICBvblByb3BlcnR5Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEcmF3RXZlbnQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBEcmF3KHRoaXMpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlJywgKGV2ZW50OiBEcmF3RXZlbnQpID0+IHRoaXMub25DaGFuZ2UuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlOmFjdGl2ZScsIChldmVudDogRHJhd0V2ZW50KSA9PiB0aGlzLm9uQ2hhbmdlQWN0aXZlLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2RyYXdlbmQnLCAoZXZlbnQ6IERyYXdFdmVudCkgPT4gdGhpcy5vbkRyYXdFbmQuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbignZHJhd3N0YXJ0JywgKGV2ZW50OiBEcmF3RXZlbnQpID0+IHRoaXMub25EcmF3U3RhcnQuZW1pdChldmVudCkpO1xyXG4gICAgdGhpcy5pbnN0YW5jZS5vbigncHJvcGVydHljaGFuZ2UnLCAoZXZlbnQ6IERyYXdFdmVudCkgPT4gdGhpcy5vblByb3BlcnR5Q2hhbmdlLmVtaXQoZXZlbnQpKTtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZEludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIl19