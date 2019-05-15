/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Host, Input, forwardRef } from '@angular/core';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';
import { TileWMS } from 'ol/source';
import { TileGrid } from 'ol/tilegrid';
import { LoadFunction } from 'ol/Tile';
export class SourceTileWMSComponent extends SourceComponent {
    /**
     * @param {?} layer
     */
    constructor(layer) {
        super(layer);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = new TileWMS(this);
        this.host.instance.setSource(this.instance);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.instance && changes.hasOwnProperty('params')) {
            this.instance.updateParams(this.params);
        }
    }
}
SourceTileWMSComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-source-tilewms',
                template: `
    <ng-content></ng-content>
  `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => SourceTileWMSComponent)) }],
            },] },
];
/** @nocollapse */
SourceTileWMSComponent.ctorParameters = () => [
    { type: LayerTileComponent, decorators: [{ type: Host }] }
];
SourceTileWMSComponent.propDecorators = {
    cacheSize: [{ type: Input }],
    crossOrigin: [{ type: Input }],
    gutter: [{ type: Input }],
    hidpi: [{ type: Input }],
    params: [{ type: Input }],
    projection: [{ type: Input }],
    reprojectionErrorThreshold: [{ type: Input }],
    serverType: [{ type: Input }],
    tileGrid: [{ type: Input }],
    tileLoadFunction: [{ type: Input }],
    url: [{ type: Input }],
    urls: [{ type: Input }],
    wrapX: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SourceTileWMSComponent.prototype.instance;
    /** @type {?} */
    SourceTileWMSComponent.prototype.cacheSize;
    /** @type {?} */
    SourceTileWMSComponent.prototype.crossOrigin;
    /** @type {?} */
    SourceTileWMSComponent.prototype.gutter;
    /** @type {?} */
    SourceTileWMSComponent.prototype.hidpi;
    /** @type {?} */
    SourceTileWMSComponent.prototype.params;
    /** @type {?} */
    SourceTileWMSComponent.prototype.projection;
    /** @type {?} */
    SourceTileWMSComponent.prototype.reprojectionErrorThreshold;
    /** @type {?} */
    SourceTileWMSComponent.prototype.serverType;
    /** @type {?} */
    SourceTileWMSComponent.prototype.tileGrid;
    /** @type {?} */
    SourceTileWMSComponent.prototype.tileLoadFunction;
    /** @type {?} */
    SourceTileWMSComponent.prototype.url;
    /** @type {?} */
    SourceTileWMSComponent.prototype.urls;
    /** @type {?} */
    SourceTileWMSComponent.prototype.wrapX;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZXdtcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9zb3VyY2VzL3RpbGV3bXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQXFCLFVBQVUsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDckcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDcEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN2QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBU3ZDLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxlQUFlOzs7O0lBNkJ6RCxZQUFvQixLQUF5QjtRQUMzQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDZixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNyRCxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDOzs7WUFqREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRTs7R0FFVDtnQkFDRCxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQyxzQkFBc0IsRUFBQyxFQUFFLENBQUM7YUFDakc7Ozs7WUFaUSxrQkFBa0IsdUJBMENaLElBQUk7Ozt3QkEzQmhCLEtBQUs7MEJBRUwsS0FBSztxQkFFTCxLQUFLO29CQUVMLEtBQUs7cUJBRUwsS0FBSzt5QkFFTCxLQUFLO3lDQUVMLEtBQUs7eUJBRUwsS0FBSzt1QkFFTCxLQUFLOytCQUVMLEtBQUs7a0JBRUwsS0FBSzttQkFFTCxLQUFLO29CQUVMLEtBQUs7Ozs7SUF6Qk4sMENBQWtCOztJQUNsQiwyQ0FDa0I7O0lBQ2xCLDZDQUNvQjs7SUFDcEIsd0NBQ2U7O0lBQ2YsdUNBQ2U7O0lBQ2Ysd0NBQ2U7O0lBQ2YsNENBQ21COztJQUNuQiw0REFDbUM7O0lBQ25DLDRDQUNtQjs7SUFDbkIsMENBQ21COztJQUNuQixrREFDK0I7O0lBQy9CLHFDQUNZOztJQUNaLHNDQUNlOztJQUNmLHVDQUNlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIGZvcndhcmRSZWYsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTGF5ZXJUaWxlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydGlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUaWxlV01TIH0gZnJvbSAnb2wvc291cmNlJztcclxuaW1wb3J0IHsgVGlsZUdyaWQgfSBmcm9tICdvbC90aWxlZ3JpZCc7XHJcbmltcG9ydCB7IExvYWRGdW5jdGlvbiB9IGZyb20gJ29sL1RpbGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLXRpbGV3bXMnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNvdXJjZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlVGlsZVdNU0NvbXBvbmVudCkgfV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VUaWxlV01TQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xyXG4gIGluc3RhbmNlOiBUaWxlV01TO1xyXG4gIEBJbnB1dCgpXHJcbiAgY2FjaGVTaXplOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBjcm9zc09yaWdpbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgZ3V0dGVyOiBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBoaWRwaTogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIHBhcmFtczogT2JqZWN0O1xyXG4gIEBJbnB1dCgpXHJcbiAgcHJvamVjdGlvbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgcmVwcm9qZWN0aW9uRXJyb3JUaHJlc2hvbGQ6IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHNlcnZlclR5cGU6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHRpbGVHcmlkOiBUaWxlR3JpZDtcclxuICBASW5wdXQoKVxyXG4gIHRpbGVMb2FkRnVuY3Rpb246IExvYWRGdW5jdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIHVybDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgdXJsczogc3RyaW5nW107XHJcbiAgQElucHV0KClcclxuICB3cmFwWDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJUaWxlQ29tcG9uZW50KSB7XHJcbiAgICBzdXBlcihsYXllcik7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVGlsZVdNUyh0aGlzKTtcclxuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2UodGhpcy5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAodGhpcy5pbnN0YW5jZSAmJiBjaGFuZ2VzLmhhc093blByb3BlcnR5KCdwYXJhbXMnKSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlLnVwZGF0ZVBhcmFtcyh0aGlzLnBhcmFtcyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==