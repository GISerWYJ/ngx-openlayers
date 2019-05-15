/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChildren, Host, QueryList } from '@angular/core';
import { SourceComponent } from './sources/source.component';
import { AttributionComponent } from './attribution.component';
export class AttributionsComponent {
    /**
     * @param {?} source
     */
    constructor(source) {
        this.source = source;
    }
    /* we can do this at the very end */
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.attributions.length) {
            this.instance = this.attributions.map((/**
             * @param {?} cmp
             * @return {?}
             */
            cmp => cmp.instance));
            // console.log('setting attributions:', this.instance);
            this.source.instance.setAttributions(this.instance);
        }
    }
}
AttributionsComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-attributions',
                template: '<ng-content></ng-content>',
            },] },
];
/** @nocollapse */
AttributionsComponent.ctorParameters = () => [
    { type: SourceComponent, decorators: [{ type: Host }] }
];
AttributionsComponent.propDecorators = {
    attributions: [{ type: ContentChildren, args: [AttributionComponent,] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2F0dHJpYnV0aW9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQU0vRCxNQUFNLE9BQU8scUJBQXFCOzs7O0lBTWhDLFlBQTRCLE1BQXVCO1FBQXZCLFdBQU0sR0FBTixNQUFNLENBQWlCO0lBQUcsQ0FBQzs7Ozs7SUFHdkQsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUc7Ozs7WUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUMsQ0FBQztZQUMzRCx1REFBdUQ7WUFDdkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNyRDtJQUNILENBQUM7OztZQW5CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFLDJCQUEyQjthQUN0Qzs7OztZQU5RLGVBQWUsdUJBYVQsSUFBSTs7OzJCQUhoQixlQUFlLFNBQUMsb0JBQW9COzs7O0lBRnJDLHlDQUE2Qjs7SUFFN0IsNkNBQzhDOzs7OztJQUVsQyx1Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgSG9zdCwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEF0dHJpYnV0aW9uIH0gZnJvbSAnb2wvY29udHJvbCc7XHJcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlcy9zb3VyY2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXR0cmlidXRpb25Db21wb25lbnQgfSBmcm9tICcuL2F0dHJpYnV0aW9uLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FvbC1hdHRyaWJ1dGlvbnMnLFxyXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGlvbnNDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBpbnN0YW5jZTogQXJyYXk8QXR0cmlidXRpb24+O1xyXG5cclxuICBAQ29udGVudENoaWxkcmVuKEF0dHJpYnV0aW9uQ29tcG9uZW50KVxyXG4gIGF0dHJpYnV0aW9uczogUXVlcnlMaXN0PEF0dHJpYnV0aW9uQ29tcG9uZW50PjtcclxuXHJcbiAgY29uc3RydWN0b3IoQEhvc3QoKSBwcml2YXRlIHNvdXJjZTogU291cmNlQ29tcG9uZW50KSB7fVxyXG5cclxuICAvKiB3ZSBjYW4gZG8gdGhpcyBhdCB0aGUgdmVyeSBlbmQgKi9cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBpZiAodGhpcy5hdHRyaWJ1dGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSB0aGlzLmF0dHJpYnV0aW9ucy5tYXAoY21wID0+IGNtcC5pbnN0YW5jZSk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzZXR0aW5nIGF0dHJpYnV0aW9uczonLCB0aGlzLmluc3RhbmNlKTtcclxuICAgICAgdGhpcy5zb3VyY2UuaW5zdGFuY2Uuc2V0QXR0cmlidXRpb25zKHRoaXMuaW5zdGFuY2UpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=