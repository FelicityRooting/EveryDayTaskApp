# TodayNg

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.
The demo address is [here](https://felicityrooting.github.io/EveryDayTaskApp/setup) 
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Whole Process
==================

##### we should create a new project, and then install ng-zorro in this project.

`$ ng new today-ng`

`$ cd today-ng`

`$ ng add ng-zorro-antd`

##### Then type `ng serve`, and open localhost:4200, you should see ng zorro log.

##### Now we need the setup page, that means the login and signup page, so we should create a setup module and component to handle it

`ng g m pages/setup`

`ng g c pages/setup --module pages/setup`

##### We need to import `ngzorro` into `NgModule`, 具体可见`setup.module.ts`的代码

##### Add router to our project, create `app/app-routing.module.ts`
见`app.routing.module.ts`的code
