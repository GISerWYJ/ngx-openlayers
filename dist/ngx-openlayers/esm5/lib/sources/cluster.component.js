/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Host, Input, forwardRef, ContentChild } from '@angular/core';
import { LayerVectorComponent } from '../layers/layervector.component';
import { SourceComponent } from './source.component';
import { SourceVectorComponent } from './vector.component';
import { Cluster } from 'ol/source';
var SourceClusterComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SourceClusterComponent, _super);
    function SourceClusterComponent(layer) {
        return _super.call(this, layer) || this;
    }
    /**
     * @return {?}
     */
    SourceClusterComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.source = this.sourceVectorComponent.instance;
        this.instance = new Cluster(this);
        this.host.instance.setSource(this.instance);
    };
    SourceClusterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-source-cluster',
                    template: "\n    <ng-content></ng-content>\n  ",
                    providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return SourceClusterComponent; })) }],
                },] },
    ];
    /** @nocollapse */
    SourceClusterComponent.ctorParameters = function () { return [
        { type: LayerVectorComponent, decorators: [{ type: Host }] }
    ]; };
    SourceClusterComponent.propDecorators = {
        distance: [{ type: Input }],
        geometryFunction: [{ type: Input }],
        wrapX: [{ type: Input }],
        sourceVectorComponent: [{ type: ContentChild, args: [SourceVectorComponent,] }]
    };
    return SourceClusterComponent;
}(SourceComponent));
export { SourceClusterComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2x1c3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9zb3VyY2VzL2NsdXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBRW5HLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsT0FBTyxFQUFVLE1BQU0sV0FBVyxDQUFDO0FBRzVDO0lBTzRDLGtEQUFlO0lBY3pELGdDQUFvQixLQUEyQjtlQUM3QyxrQkFBTSxLQUFLLENBQUM7SUFDZCxDQUFDOzs7O0lBRUQsbURBQWtCOzs7SUFBbEI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUM7UUFFbEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7O2dCQTlCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLHFDQUVUO29CQUNELFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsVUFBVTs7OzRCQUFDLGNBQU0sT0FBQSxzQkFBc0IsRUFBdEIsQ0FBc0IsRUFBQyxFQUFFLENBQUM7aUJBQ2pHOzs7O2dCQVpRLG9CQUFvQix1QkEyQmQsSUFBSTs7OzJCQVhoQixLQUFLO21DQUVMLEtBQUs7d0JBRUwsS0FBSzt3Q0FHTCxZQUFZLFNBQUMscUJBQXFCOztJQWNyQyw2QkFBQztDQUFBLEFBL0JELENBTzRDLGVBQWUsR0F3QjFEO1NBeEJZLHNCQUFzQjs7O0lBQ2pDLDBDQUFrQjs7SUFFbEIsMENBQ2lCOztJQUNqQixrREFDK0M7O0lBQy9DLHVDQUNnQjs7SUFFaEIsdURBQzZDOztJQUM3Qyx3Q0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdCwgSW5wdXQsIGZvcndhcmRSZWYsIENvbnRlbnRDaGlsZCwgQWZ0ZXJDb250ZW50SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGZWF0dXJlIH0gZnJvbSAnb2wnO1xyXG5pbXBvcnQgeyBMYXllclZlY3RvckNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcnZlY3Rvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3VyY2VWZWN0b3JDb21wb25lbnQgfSBmcm9tICcuL3ZlY3Rvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDbHVzdGVyLCBWZWN0b3IgfSBmcm9tICdvbC9zb3VyY2UnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJ29sL2dlb20nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLWNsdXN0ZXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNvdXJjZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlQ2x1c3RlckNvbXBvbmVudCkgfV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VDbHVzdGVyQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgaW5zdGFuY2U6IENsdXN0ZXI7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZGlzdGFuY2U6IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIGdlb21ldHJ5RnVuY3Rpb24/OiAoZmVhdHVyZTogRmVhdHVyZSkgPT4gUG9pbnQ7XHJcbiAgQElucHV0KClcclxuICB3cmFwWD86IGJvb2xlYW47XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoU291cmNlVmVjdG9yQ29tcG9uZW50KVxyXG4gIHNvdXJjZVZlY3RvckNvbXBvbmVudDogU291cmNlVmVjdG9yQ29tcG9uZW50O1xyXG4gIHNvdXJjZTogVmVjdG9yO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASG9zdCgpIGxheWVyOiBMYXllclZlY3RvckNvbXBvbmVudCkge1xyXG4gICAgc3VwZXIobGF5ZXIpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgdGhpcy5zb3VyY2UgPSB0aGlzLnNvdXJjZVZlY3RvckNvbXBvbmVudC5pbnN0YW5jZTtcclxuXHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IENsdXN0ZXIodGhpcyk7XHJcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKHRoaXMuaW5zdGFuY2UpO1xyXG4gIH1cclxufVxyXG4iXX0=