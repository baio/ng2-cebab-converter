CONVERT NG-2 ALPHA.52 BREAKING CHANGES
=======================================

##Cebab-case converter

###Problem

https://github.com/angular/angular/blob/master/modules/angular2/docs/migration/kebab-case.md


+ *ng-xxx => ngXxx
+ [xxx-yyy] => [xxxYyy]
+ @Input('xxx-yyy') => @Input('xxxYyy')
+ #xxx-yyy => #xxxYyy 

Other cases must be converted manually