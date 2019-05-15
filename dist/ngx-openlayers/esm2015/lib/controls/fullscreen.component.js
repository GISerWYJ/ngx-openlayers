/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FullScreen } from 'ol/control';
import { MapComponent } from '../map.component';
export class ControlFullScreenComponent {
    /**
     * @param {?} map
     */
    constructor(map) {
        this.map = map;
        // console.log('instancing aol-control-fullscreen');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = new FullScreen(this);
        this.map.instance.addControl(this.instance);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // console.log('removing aol-control-fullscreen');
        this.map.instance.removeControl(this.instance);
    }
}
ControlFullScreenComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-control-fullscreen',
                template: `
    <ng-content></ng-content>
  `,
            },] },
];
/** @nocollapse */
ControlFullScreenComponent.ctorParameters = () => [
    { type: MapComponent }
];
ControlFullScreenComponent.propDecorators = {
    className: [{ type: Input }],
    label: [{ type: Input }],
    labelActive: [{ type: Input }],
    tipLabel: [{ type: Input }],
    keys: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ControlFullScreenComponent.prototype.instance;
    /** @type {?} */
    ControlFullScreenComponent.prototype.className;
    /** @type {?} */
    ControlFullScreenComponent.prototype.label;
    /** @type {?} */
    ControlFullScreenComponent.prototype.labelActive;
    /** @type {?} */
    ControlFullScreenComponent.prototype.tipLabel;
    /** @type {?} */
    ControlFullScreenComponent.prototype.keys;
    /**
     * @type {?}
     * @private
     */
    ControlFullScreenComponent.prototype.map;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHNjcmVlbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9scy9mdWxsc2NyZWVuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDeEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBUWhELE1BQU0sT0FBTywwQkFBMEI7Ozs7SUFjckMsWUFBb0IsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztRQUNuQyxvREFBb0Q7SUFDdEQsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxrREFBa0Q7UUFDbEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7WUFoQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFFBQVEsRUFBRTs7R0FFVDthQUNGOzs7O1lBUFEsWUFBWTs7O3dCQVdsQixLQUFLO29CQUVMLEtBQUs7MEJBRUwsS0FBSzt1QkFFTCxLQUFLO21CQUVMLEtBQUs7Ozs7SUFWTiw4Q0FBcUI7O0lBRXJCLCtDQUNrQjs7SUFDbEIsMkNBQ2M7O0lBQ2QsaURBQ29COztJQUNwQiw4Q0FDaUI7O0lBQ2pCLDBDQUNjOzs7OztJQUVGLHlDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZ1bGxTY3JlZW4gfSBmcm9tICdvbC9jb250cm9sJztcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1jb250cm9sLWZ1bGxzY3JlZW4nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRyb2xGdWxsU2NyZWVuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGluc3RhbmNlOiBGdWxsU2NyZWVuO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGNsYXNzTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgbGFiZWw6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGxhYmVsQWN0aXZlOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICB0aXBMYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAga2V5czogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2luc3RhbmNpbmcgYW9sLWNvbnRyb2wtZnVsbHNjcmVlbicpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IEZ1bGxTY3JlZW4odGhpcyk7XHJcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygncmVtb3ZpbmcgYW9sLWNvbnRyb2wtZnVsbHNjcmVlbicpO1xyXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIl19