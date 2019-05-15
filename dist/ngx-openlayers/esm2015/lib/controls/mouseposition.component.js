/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
import MousePosition from 'ol/control/MousePosition';
import { MapComponent } from '../map.component';
import { CoordinateFormat } from 'ol/coordinate';
import { ProjectionLike } from 'ol/proj';
export class ControlMousePositionComponent {
    /**
     * @param {?} map
     * @param {?} element
     */
    constructor(map, element) {
        this.map = map;
        this.element = element;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.target = this.element.nativeElement;
        // console.log('ol.control.MousePosition init: ', this);
        this.instance = new MousePosition(this);
        this.map.instance.addControl(this.instance);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // console.log('removing aol-control-mouseposition');
        this.map.instance.removeControl(this.instance);
    }
}
ControlMousePositionComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-control-mouseposition',
                template: ``,
            },] },
];
/** @nocollapse */
ControlMousePositionComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: ElementRef }
];
ControlMousePositionComponent.propDecorators = {
    coordinateFormat: [{ type: Input }],
    projection: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ControlMousePositionComponent.prototype.instance;
    /** @type {?} */
    ControlMousePositionComponent.prototype.coordinateFormat;
    /** @type {?} */
    ControlMousePositionComponent.prototype.projection;
    /** @type {?} */
    ControlMousePositionComponent.prototype.target;
    /**
     * @type {?}
     * @private
     */
    ControlMousePositionComponent.prototype.map;
    /**
     * @type {?}
     * @private
     */
    ControlMousePositionComponent.prototype.element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW91c2Vwb3NpdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9scy9tb3VzZXBvc2l0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLGFBQWEsTUFBTSwwQkFBMEIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFNekMsTUFBTSxPQUFPLDZCQUE2Qjs7Ozs7SUFReEMsWUFBb0IsR0FBaUIsRUFBVSxPQUFtQjtRQUE5QyxRQUFHLEdBQUgsR0FBRyxDQUFjO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBWTtJQUFHLENBQUM7Ozs7SUFFdEUsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDekMsd0RBQXdEO1FBQ3hELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7O0lBRUQsV0FBVztRQUNULHFEQUFxRDtRQUNyRCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7OztZQXhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsUUFBUSxFQUFFLEVBQUU7YUFDYjs7OztZQVBRLFlBQVk7WUFGRCxVQUFVOzs7K0JBWTNCLEtBQUs7eUJBRUwsS0FBSzs7OztJQUhOLGlEQUF3Qjs7SUFDeEIseURBQ21DOztJQUNuQyxtREFDMkI7O0lBQzNCLCtDQUFnQjs7Ozs7SUFFSiw0Q0FBeUI7Ozs7O0lBQUUsZ0RBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IE1vdXNlUG9zaXRpb24gZnJvbSAnb2wvY29udHJvbC9Nb3VzZVBvc2l0aW9uJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvb3JkaW5hdGVGb3JtYXQgfSBmcm9tICdvbC9jb29yZGluYXRlJztcclxuaW1wb3J0IHsgUHJvamVjdGlvbkxpa2UgfSBmcm9tICdvbC9wcm9qJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWNvbnRyb2wtbW91c2Vwb3NpdGlvbicsXHJcbiAgdGVtcGxhdGU6IGBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udHJvbE1vdXNlUG9zaXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgaW5zdGFuY2U6IE1vdXNlUG9zaXRpb247XHJcbiAgQElucHV0KClcclxuICBjb29yZGluYXRlRm9ybWF0OiBDb29yZGluYXRlRm9ybWF0O1xyXG4gIEBJbnB1dCgpXHJcbiAgcHJvamVjdGlvbjogUHJvamVjdGlvbkxpa2U7XHJcbiAgdGFyZ2V0OiBFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50LCBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy50YXJnZXQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdvbC5jb250cm9sLk1vdXNlUG9zaXRpb24gaW5pdDogJywgdGhpcyk7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IE1vdXNlUG9zaXRpb24odGhpcyk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygncmVtb3ZpbmcgYW9sLWNvbnRyb2wtbW91c2Vwb3NpdGlvbicpO1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIl19