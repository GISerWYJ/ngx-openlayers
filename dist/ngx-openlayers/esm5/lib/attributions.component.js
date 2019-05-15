/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChildren, Host, QueryList } from '@angular/core';
import { SourceComponent } from './sources/source.component';
import { AttributionComponent } from './attribution.component';
var AttributionsComponent = /** @class */ (function () {
    function AttributionsComponent(source) {
        this.source = source;
    }
    /* we can do this at the very end */
    /* we can do this at the very end */
    /**
     * @return {?}
     */
    AttributionsComponent.prototype.ngAfterViewInit = /* we can do this at the very end */
    /**
     * @return {?}
     */
    function () {
        if (this.attributions.length) {
            this.instance = this.attributions.map((/**
             * @param {?} cmp
             * @return {?}
             */
            function (cmp) { return cmp.instance; }));
            // console.log('setting attributions:', this.instance);
            this.source.instance.setAttributions(this.instance);
        }
    };
    AttributionsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-attributions',
                    template: '<ng-content></ng-content>',
                },] },
    ];
    /** @nocollapse */
    AttributionsComponent.ctorParameters = function () { return [
        { type: SourceComponent, decorators: [{ type: Host }] }
    ]; };
    AttributionsComponent.propDecorators = {
        attributions: [{ type: ContentChildren, args: [AttributionComponent,] }]
    };
    return AttributionsComponent;
}());
export { AttributionsComponent };
if (false) {
    /** @type {?} */
    AttributionsComponent.prototype.instance;
    /** @type {?} */
    AttributionsComponent.prototype.attributions;
    /**
     * @type {?}
     * @private
     */
    AttributionsComponent.prototype.source;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2F0dHJpYnV0aW9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUUvRDtJQVVFLCtCQUE0QixNQUF1QjtRQUF2QixXQUFNLEdBQU4sTUFBTSxDQUFpQjtJQUFHLENBQUM7SUFFdkQsb0NBQW9DOzs7OztJQUNwQywrQ0FBZTs7OztJQUFmO1FBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRTtZQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLFFBQVEsRUFBWixDQUFZLEVBQUMsQ0FBQztZQUMzRCx1REFBdUQ7WUFDdkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNyRDtJQUNILENBQUM7O2dCQW5CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLDJCQUEyQjtpQkFDdEM7Ozs7Z0JBTlEsZUFBZSx1QkFhVCxJQUFJOzs7K0JBSGhCLGVBQWUsU0FBQyxvQkFBb0I7O0lBYXZDLDRCQUFDO0NBQUEsQUFwQkQsSUFvQkM7U0FoQlkscUJBQXFCOzs7SUFDaEMseUNBQTZCOztJQUU3Qiw2Q0FDOEM7Ozs7O0lBRWxDLHVDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBIb3N0LCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXR0cmlidXRpb24gfSBmcm9tICdvbC9jb250cm9sJztcclxuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2VzL3NvdXJjZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBdHRyaWJ1dGlvbkNvbXBvbmVudCB9IGZyb20gJy4vYXR0cmlidXRpb24uY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW9sLWF0dHJpYnV0aW9ucycsXHJcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEF0dHJpYnV0aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIGluc3RhbmNlOiBBcnJheTxBdHRyaWJ1dGlvbj47XHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oQXR0cmlidXRpb25Db21wb25lbnQpXHJcbiAgYXR0cmlidXRpb25zOiBRdWVyeUxpc3Q8QXR0cmlidXRpb25Db21wb25lbnQ+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgc291cmNlOiBTb3VyY2VDb21wb25lbnQpIHt9XHJcblxyXG4gIC8qIHdlIGNhbiBkbyB0aGlzIGF0IHRoZSB2ZXJ5IGVuZCAqL1xyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmF0dHJpYnV0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZSA9IHRoaXMuYXR0cmlidXRpb25zLm1hcChjbXAgPT4gY21wLmluc3RhbmNlKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ3NldHRpbmcgYXR0cmlidXRpb25zOicsIHRoaXMuaW5zdGFuY2UpO1xyXG4gICAgICB0aGlzLnNvdXJjZS5pbnN0YW5jZS5zZXRBdHRyaWJ1dGlvbnModGhpcy5pbnN0YW5jZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==