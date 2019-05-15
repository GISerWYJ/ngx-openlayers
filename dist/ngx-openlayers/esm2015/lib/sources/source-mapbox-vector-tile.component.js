/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, forwardRef, Host, Input } from '@angular/core';
import stylefunction from 'ol-mapbox-style/stylefunction';
import { applyBackground } from 'ol-mapbox-style';
import { SourceComponent } from './source.component';
import { LayerVectorTileComponent } from '../layers/layervectortile.component';
import { MapComponent } from '../map.component';
import { SourceVectorTileComponent } from './vectortile.component';
import { HttpClient } from '@angular/common/http';
export class SourceMapboxVectorTileComponent extends SourceVectorTileComponent {
    /**
     * @param {?} layer
     * @param {?} map
     * @param {?} http
     */
    constructor(layer, map, http) {
        super(layer);
        this.map = map;
        this.http = http;
        this.styleLoaded = false;
        this.spriteJsonLoaded = false;
        this.glStyle = {};
        this.spriteData = {};
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        super.ngAfterContentInit();
        this.http.get(this.styleUrl).subscribe((/**
         * @param {?} styleObject
         * @return {?}
         */
        styleObject => {
            this.glStyle = styleObject;
            this.styleLoaded = true;
            this.applyMapboxStyle();
        }));
        this.http.get(this.spriteJsonUrl).subscribe((/**
         * @param {?} spriteData
         * @return {?}
         */
        spriteData => {
            this.spriteData = spriteData;
            this.spriteJsonLoaded = true;
            this.applyMapboxStyle();
        }));
    }
    /**
     * @return {?}
     */
    applyMapboxStyle() {
        // set the mapbox style
        if (this.spriteJsonLoaded && this.styleLoaded) {
            stylefunction(this.host.instance, this.glStyle, this.sourceName, undefined, this.spriteData, this.spriteUrl);
            applyBackground(this.map.instance, this.glStyle);
        }
    }
}
SourceMapboxVectorTileComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-source-mapbox',
                template: `
    <ng-content></ng-content>
  `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => SourceMapboxVectorTileComponent)) }],
            },] },
];
/** @nocollapse */
SourceMapboxVectorTileComponent.ctorParameters = () => [
    { type: LayerVectorTileComponent, decorators: [{ type: Host }] },
    { type: MapComponent },
    { type: HttpClient }
];
SourceMapboxVectorTileComponent.propDecorators = {
    styleUrl: [{ type: Input }],
    sourceName: [{ type: Input }],
    spriteJsonUrl: [{ type: Input }],
    spriteUrl: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SourceMapboxVectorTileComponent.prototype.styleUrl;
    /** @type {?} */
    SourceMapboxVectorTileComponent.prototype.sourceName;
    /** @type {?} */
    SourceMapboxVectorTileComponent.prototype.spriteJsonUrl;
    /** @type {?} */
    SourceMapboxVectorTileComponent.prototype.spriteUrl;
    /**
     * @type {?}
     * @private
     */
    SourceMapboxVectorTileComponent.prototype.styleLoaded;
    /**
     * @type {?}
     * @private
     */
    SourceMapboxVectorTileComponent.prototype.spriteJsonLoaded;
    /**
     * @type {?}
     * @private
     */
    SourceMapboxVectorTileComponent.prototype.glStyle;
    /**
     * @type {?}
     * @private
     */
    SourceMapboxVectorTileComponent.prototype.spriteData;
    /**
     * @type {?}
     * @private
     */
    SourceMapboxVectorTileComponent.prototype.map;
    /**
     * @type {?}
     * @private
     */
    SourceMapboxVectorTileComponent.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLW1hcGJveC12ZWN0b3ItdGlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9zb3VyY2VzL3NvdXJjZS1tYXBib3gtdmVjdG9yLXRpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWtDLFNBQVMsRUFBZ0IsVUFBVSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFHeEgsT0FBTyxhQUFhLE1BQU0sK0JBQStCLENBQUM7QUFDMUQsT0FBTyxFQUFhLGVBQWUsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzVELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUM3RSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDOUMsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDakUsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBU2hELE1BQU0sT0FBTywrQkFBZ0MsU0FBUSx5QkFBeUI7Ozs7OztJQWtCNUUsWUFBb0IsS0FBK0IsRUFBVSxHQUFpQixFQUFVLElBQWdCO1FBQ3RHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUQ4QyxRQUFHLEdBQUgsR0FBRyxDQUFjO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBWTtRQVJoRyxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUVwQixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFFekIsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUViLGVBQVUsR0FBRyxFQUFFLENBQUM7SUFJeEIsQ0FBQzs7OztJQUdELGtCQUFrQjtRQUNoQixLQUFLLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUUzQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ25ELElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDO1lBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFVLENBQUMsRUFBRTtZQUN2RCxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztZQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1lBQzdCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUdELGdCQUFnQjtRQUNkLHVCQUF1QjtRQUN2QixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQzdDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzdHLGVBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbEQ7SUFDSCxDQUFDOzs7WUFyREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRTs7R0FFVDtnQkFDRCxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQywrQkFBK0IsRUFBQyxFQUFDLENBQUM7YUFDeEc7Ozs7WUFYTyx3QkFBd0IsdUJBOEJqQixJQUFJO1lBN0JYLFlBQVk7WUFFWixVQUFVOzs7dUJBV2YsS0FBSzt5QkFFTCxLQUFLOzRCQUVMLEtBQUs7d0JBRUwsS0FBSzs7OztJQU5OLG1EQUEwQjs7SUFFMUIscURBQTRCOztJQUU1Qix3REFBK0I7O0lBRS9CLG9EQUEyQjs7Ozs7SUFFM0Isc0RBQTRCOzs7OztJQUU1QiwyREFBaUM7Ozs7O0lBRWpDLGtEQUFxQjs7Ozs7SUFFckIscURBQXdCOzs7OztJQUU2Qiw4Q0FBeUI7Ozs7O0lBQUUsK0NBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgZm9yd2FyZFJlZiwgSG9zdCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1Byb2plY3Rpb25MaWtlfSBmcm9tICdvbC9wcm9qJztcbmltcG9ydCB7VXJsRnVuY3Rpb259IGZyb20gJ29sL1RpbGUnO1xuaW1wb3J0IHN0eWxlZnVuY3Rpb24gZnJvbSAnb2wtbWFwYm94LXN0eWxlL3N0eWxlZnVuY3Rpb24nO1xuaW1wb3J0IHthcHBseVN0eWxlLCBhcHBseUJhY2tncm91bmR9IGZyb20gJ29sLW1hcGJveC1zdHlsZSc7XG5pbXBvcnQge1NvdXJjZUNvbXBvbmVudH0gZnJvbSAnLi9zb3VyY2UuY29tcG9uZW50JztcbmltcG9ydCB7TGF5ZXJWZWN0b3JUaWxlQ29tcG9uZW50fSBmcm9tICcuLi9sYXllcnMvbGF5ZXJ2ZWN0b3J0aWxlLmNvbXBvbmVudCc7XG5pbXBvcnQge01hcENvbXBvbmVudH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQge1NvdXJjZVZlY3RvclRpbGVDb21wb25lbnR9IGZyb20gJy4vdmVjdG9ydGlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1zb3VyY2UtbWFwYm94JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGAsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZU1hcGJveFZlY3RvclRpbGVDb21wb25lbnQpfV0sXG59KVxuZXhwb3J0IGNsYXNzIFNvdXJjZU1hcGJveFZlY3RvclRpbGVDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VWZWN0b3JUaWxlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgQElucHV0KCkgc3R5bGVVcmw6IHN0cmluZztcblxuICBASW5wdXQoKSBzb3VyY2VOYW1lOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgc3ByaXRlSnNvblVybDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIHNwcml0ZVVybDogc3RyaW5nO1xuXG4gIHByaXZhdGUgc3R5bGVMb2FkZWQgPSBmYWxzZTtcblxuICBwcml2YXRlIHNwcml0ZUpzb25Mb2FkZWQgPSBmYWxzZTtcblxuICBwcml2YXRlIGdsU3R5bGUgPSB7fTtcblxuICBwcml2YXRlIHNwcml0ZURhdGEgPSB7fTtcblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIGxheWVyOiBMYXllclZlY3RvclRpbGVDb21wb25lbnQsIHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQsIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xuICAgIHN1cGVyKGxheWVyKTtcbiAgfVxuXG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHN1cGVyLm5nQWZ0ZXJDb250ZW50SW5pdCgpO1xuXG4gICAgdGhpcy5odHRwLmdldCh0aGlzLnN0eWxlVXJsKS5zdWJzY3JpYmUoc3R5bGVPYmplY3QgPT4ge1xuICAgICAgdGhpcy5nbFN0eWxlID0gc3R5bGVPYmplY3Q7XG4gICAgICB0aGlzLnN0eWxlTG9hZGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuYXBwbHlNYXBib3hTdHlsZSgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5odHRwLmdldCh0aGlzLnNwcml0ZUpzb25VcmwpLnN1YnNjcmliZShzcHJpdGVEYXRhID0+IHtcbiAgICAgIHRoaXMuc3ByaXRlRGF0YSA9IHNwcml0ZURhdGE7XG4gICAgICB0aGlzLnNwcml0ZUpzb25Mb2FkZWQgPSB0cnVlO1xuICAgICAgdGhpcy5hcHBseU1hcGJveFN0eWxlKCk7XG4gICAgfSk7XG4gIH1cblxuXG4gIGFwcGx5TWFwYm94U3R5bGUoKSB7XG4gICAgLy8gc2V0IHRoZSBtYXBib3ggc3R5bGVcbiAgICBpZiAodGhpcy5zcHJpdGVKc29uTG9hZGVkICYmIHRoaXMuc3R5bGVMb2FkZWQpIHtcbiAgICAgIHN0eWxlZnVuY3Rpb24odGhpcy5ob3N0Lmluc3RhbmNlLCB0aGlzLmdsU3R5bGUsIHRoaXMuc291cmNlTmFtZSwgdW5kZWZpbmVkLCB0aGlzLnNwcml0ZURhdGEsIHRoaXMuc3ByaXRlVXJsKTtcbiAgICAgIGFwcGx5QmFja2dyb3VuZCh0aGlzLm1hcC5pbnN0YW5jZSwgdGhpcy5nbFN0eWxlKTtcbiAgICB9XG4gIH1cblxufVxuIl19