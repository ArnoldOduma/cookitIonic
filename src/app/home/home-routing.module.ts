import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePage} from './home.page';
import {BreakfastComponent} from "./breakfast/breakfast.component";

const routes: Routes = [
    {
        path: '',
        component: HomePage,
        children: [

            {
                path: 'breakfast',
                component: BreakfastComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomePageRoutingModule {
}
