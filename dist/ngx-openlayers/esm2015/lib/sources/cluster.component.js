/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Host, Input, forwardRef, ContentChild } from '@angular/core';
import { LayerVectorComponent } from '../layers/layervector.component';
import { SourceComponent } from './source.component';
import { SourceVectorComponent } from './vector.component';
import { Cluster } from 'ol/source';
export class SourceClusterComponent extends SourceComponent {
    /**
     * @param {?} layer
     */
    constructor(layer) {
        super(layer);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.source = this.sourceVectorComponent.instance;
        this.instance = new Cluster(this);
        this.host.instance.setSource(this.instance);
    }
}
SourceClusterComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-source-cluster',
                template: `
    <ng-content></ng-content>
  `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => SourceClusterComponent)) }],
            },] },
];
/** @nocollapse */
SourceClusterComponent.ctorParameters = () => [
    { type: LayerVectorComponent, decorators: [{ type: Host }] }
];
SourceClusterComponent.propDecorators = {
    distance: [{ type: Input }],
    geometryFunction: [{ type: Input }],
    wrapX: [{ type: Input }],
    sourceVectorComponent: [{ type: ContentChild, args: [SourceVectorComponent,] }]
};
if (false) {
    /** @type {?} */
    SourceClusterComponent.prototype.instance;
    /** @type {?} */
    SourceClusterComponent.prototype.distance;
    /** @type {?} */
    SourceClusterComponent.prototype.geometryFunction;
    /** @type {?} */
    SourceClusterComponent.prototype.wrapX;
    /** @type {?} */
    SourceClusterComponent.prototype.sourceVectorComponent;
    /** @type {?} */
    SourceClusterComponent.prototype.source;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2x1c3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9zb3VyY2VzL2NsdXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFFbkcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzNELE9BQU8sRUFBRSxPQUFPLEVBQVUsTUFBTSxXQUFXLENBQUM7QUFVNUMsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGVBQWU7Ozs7SUFjekQsWUFBb0IsS0FBMkI7UUFDN0MsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2YsQ0FBQzs7OztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUM7UUFFbEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7OztZQTlCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFOztHQUVUO2dCQUNELFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsVUFBVTs7O3dCQUFDLEdBQUcsRUFBRSxDQUFDLHNCQUFzQixFQUFDLEVBQUUsQ0FBQzthQUNqRzs7OztZQVpRLG9CQUFvQix1QkEyQmQsSUFBSTs7O3VCQVhoQixLQUFLOytCQUVMLEtBQUs7b0JBRUwsS0FBSztvQ0FHTCxZQUFZLFNBQUMscUJBQXFCOzs7O0lBVG5DLDBDQUFrQjs7SUFFbEIsMENBQ2lCOztJQUNqQixrREFDK0M7O0lBQy9DLHVDQUNnQjs7SUFFaEIsdURBQzZDOztJQUM3Qyx3Q0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdCwgSW5wdXQsIGZvcndhcmRSZWYsIENvbnRlbnRDaGlsZCwgQWZ0ZXJDb250ZW50SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGZWF0dXJlIH0gZnJvbSAnb2wnO1xyXG5pbXBvcnQgeyBMYXllclZlY3RvckNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcnZlY3Rvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3VyY2VWZWN0b3JDb21wb25lbnQgfSBmcm9tICcuL3ZlY3Rvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDbHVzdGVyLCBWZWN0b3IgfSBmcm9tICdvbC9zb3VyY2UnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJ29sL2dlb20nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLWNsdXN0ZXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNvdXJjZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlQ2x1c3RlckNvbXBvbmVudCkgfV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VDbHVzdGVyQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgaW5zdGFuY2U6IENsdXN0ZXI7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZGlzdGFuY2U6IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIGdlb21ldHJ5RnVuY3Rpb24/OiAoZmVhdHVyZTogRmVhdHVyZSkgPT4gUG9pbnQ7XHJcbiAgQElucHV0KClcclxuICB3cmFwWD86IGJvb2xlYW47XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoU291cmNlVmVjdG9yQ29tcG9uZW50KVxyXG4gIHNvdXJjZVZlY3RvckNvbXBvbmVudDogU291cmNlVmVjdG9yQ29tcG9uZW50O1xyXG4gIHNvdXJjZTogVmVjdG9yO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASG9zdCgpIGxheWVyOiBMYXllclZlY3RvckNvbXBvbmVudCkge1xyXG4gICAgc3VwZXIobGF5ZXIpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgdGhpcy5zb3VyY2UgPSB0aGlzLnNvdXJjZVZlY3RvckNvbXBvbmVudC5pbnN0YW5jZTtcclxuXHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IENsdXN0ZXIodGhpcyk7XHJcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iXX0=