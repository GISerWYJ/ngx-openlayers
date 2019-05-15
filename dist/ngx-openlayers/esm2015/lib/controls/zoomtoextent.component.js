/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ZoomToExtent } from 'ol/control';
import { MapComponent } from '../map.component';
import { Extent } from 'ol/extent';
export class ControlZoomToExtentComponent {
    /**
     * @param {?} map
     */
    constructor(map) {
        this.map = map;
        // console.log('instancing aol-control-zoomtoextent');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = new ZoomToExtent(this);
        this.map.instance.addControl(this.instance);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // console.log('removing aol-control-zoomtoextent');
        this.map.instance.removeControl(this.instance);
    }
}
ControlZoomToExtentComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-control-zoomtoextent',
                template: `
    <ng-content></ng-content>
  `,
            },] },
];
/** @nocollapse */
ControlZoomToExtentComponent.ctorParameters = () => [
    { type: MapComponent }
];
ControlZoomToExtentComponent.propDecorators = {
    className: [{ type: Input }],
    label: [{ type: Input }],
    tipLabel: [{ type: Input }],
    extent: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ControlZoomToExtentComponent.prototype.instance;
    /** @type {?} */
    ControlZoomToExtentComponent.prototype.className;
    /** @type {?} */
    ControlZoomToExtentComponent.prototype.label;
    /** @type {?} */
    ControlZoomToExtentComponent.prototype.tipLabel;
    /** @type {?} */
    ControlZoomToExtentComponent.prototype.extent;
    /**
     * @type {?}
     * @private
     */
    ControlZoomToExtentComponent.prototype.map;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbXRvZXh0ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL3pvb210b2V4dGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBUW5DLE1BQU0sT0FBTyw0QkFBNEI7Ozs7SUFZdkMsWUFBb0IsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztRQUNuQyxzREFBc0Q7SUFDeEQsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxvREFBb0Q7UUFDcEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7WUE5QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFFBQVEsRUFBRTs7R0FFVDthQUNGOzs7O1lBUlEsWUFBWTs7O3dCQVlsQixLQUFLO29CQUVMLEtBQUs7dUJBRUwsS0FBSztxQkFFTCxLQUFLOzs7O0lBUk4sZ0RBQXVCOztJQUV2QixpREFDa0I7O0lBQ2xCLDZDQUNxQjs7SUFDckIsZ0RBQ2lCOztJQUNqQiw4Q0FDZTs7Ozs7SUFFSCwyQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBab29tVG9FeHRlbnQgfSBmcm9tICdvbC9jb250cm9sJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEV4dGVudCB9IGZyb20gJ29sL2V4dGVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1jb250cm9sLXpvb210b2V4dGVudCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udHJvbFpvb21Ub0V4dGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBpbnN0YW5jZTogWm9vbVRvRXh0ZW50O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGNsYXNzTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgbGFiZWw6IHN0cmluZyB8IE5vZGU7XHJcbiAgQElucHV0KClcclxuICB0aXBMYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgZXh0ZW50OiBFeHRlbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdpbnN0YW5jaW5nIGFvbC1jb250cm9sLXpvb210b2V4dGVudCcpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFpvb21Ub0V4dGVudCh0aGlzKTtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZENvbnRyb2wodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmluZyBhb2wtY29udHJvbC16b29tdG9leHRlbnQnKTtcclxuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUNvbnRyb2wodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==