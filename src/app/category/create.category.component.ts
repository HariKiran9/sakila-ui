import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { CategoryService } from './category.service';
import { Category } from './category.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'app-create-category',
    templateUrl: './create.category.component.html',
    styleUrls: ['./create.category.component.scss']
})
export class CreateCategoryComponent implements OnInit {

    public selectedCategory: string;
    public categories: Category[] = [];
    public category: Category;
    public categoryForm: FormGroup;
    public nameLengh: number;
    public pageTitle: string;
    public validationMessage = {
        'name': {
            'required': 'Category Name is required',
            'minlength': 'Category Name must be greater than 2 characters',
            'maxlength': 'Category Name must be less than or equal to 10 characters'
        },
        'email': {
            'required': 'Email is required',
            'emailDomain': 'Email should be intl.att.com'
        },
        'phone': {
            'required': 'Phone is required'
        },
        'skillName': {
            'required': 'Skill Name is required'
        },
        'experienceInYears': {
            'required': 'Experience is required'
        },
        'proficiency': {
            'required': 'Proficiency is required'
        },
        'selectedCategory': {
            'required': 'Category is required'
        }
    };

    public formErrors = {
        'name': '',
        'email': '',
        'phone': '',
        'skillName': '',
        'experienceInYears': '',
        'proficiency': '',
        'selectedCategory': ''
    };

    constructor(private router: Router,
        private activedRoute: ActivatedRoute,
        private fb: FormBuilder,
        private categoryService: CategoryService) {
        console.log('[CreateCategoryComponent]');
    }

    ngOnInit() {
        console.log('[CreateCategoryComponent] [ngOnInit]');

        //From Group
        // this.categoryForm = new FormGroup({
        //     name: new FormControl(),
        //     email: new FormControl(),
        //     skills: new FormGroup({
        //         skillName: new FormControl(),
        //         experienceInYears: new FormControl(),
        //         proficiency: new FormControl()
        //     })
        // });

        this.categoryService.getCategory().subscribe(response => {
            this.categories = response;
        });

        //From Builder
        this.categoryForm = this.fb.group({
            categoryId: [''],
            name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
            contactPreference: ['email'],
            email: ['', [Validators.required, emailDomain]],
            phone: [''],
            selectedCategory: ['', Validators.required],
            skills: this.fb.group({
                skillName: ['', Validators.required],
                experienceInYears: ['', Validators.required],
                proficiency: ['', Validators.required]
            })
        });


        //value Change subscribe
        this.categoryForm.get('name').valueChanges.subscribe((value: string) => {
            // this.nameLengh = value.length;            
        });

        //Listens to Entire Form
        this.categoryForm.valueChanges.subscribe((data) => {
            // console.log(JSON.stringify(value));
            this.logValidationErrors(this.categoryForm);
        });
        //Listens to Sub set Form
        this.categoryForm.get('skills').valueChanges.subscribe((value: any) => {
            // console.log(JSON.stringify(value));
        });

        this.categoryForm.get('contactPreference').valueChanges.subscribe((data: string) => {
            this.onContactPreferenceChange(data);
        });

        this.activedRoute.paramMap.subscribe(param => {
            const categoryId = +param.get('id');
            if (categoryId) {
                this.pageTitle = "Edit Category";
                this.getCategoryDetailsById(categoryId);
            } else {
                this.pageTitle = "Create Category";
                this.category = {
                    'categoryId': null,
                    'name': '',
                    'lastUpdate': '',
                    'email': '',
                    'phone': '',
                    'skillName': '',
                    'experienceInYears': '',
                    'proficiency': '',
                    'selectedCategory': ''

                };
            }
        });
    }

    submit(): void {
        console.log('[CreateCategoryComponent] [submit] : touched : ', this.categoryForm.touched);
        console.log('[CreateCategoryComponent] [submit] : value : ', this.categoryForm.value);
        console.log('[CreateCategoryComponent] [submit] : name.value : ', this.categoryForm.controls.name.value);
        console.log('[CreateCategoryComponent] [submit] : get(\'name\').value : ', this.categoryForm.get('name').value);
        console.log('[CreateCategoryComponent] [submit] : dirty : ', this.categoryForm.dirty);
        console.log('[CreateCategoryComponent] [submit] : name.touched : ', this.categoryForm.controls.name.touched);
    }

    onLoadData(): void {
        console.log('[CreateCategoryComponent] [onLoadData] ');
        // this.categoryForm.setValue({
        //     name: "Bala Hari Kiran",
        //     email: "hari.chebrol@gmail.com",
        //     skills: {
        //         skillName: "Java",
        //         experienceInYears: "12 Years",
        //         proficiency: "advanced"
        //     }
        // });

        // this.logKeyValuePairs(this.categoryForm);

        // this.logValidationErrors(this.categoryForm);
        // console.log("Form Errors : ", this.formErrors);
    }

    patchValue() {
        this.categoryForm.patchValue({
            email: "kiran.chebrolu@gmail.com"
        });
    }

    logKeyValuePairs(group: FormGroup): void {
        // console.log("Keys : ", Object.keys(group.controls));
        Object.keys(group.controls).forEach((key: string) => {
            const abstractControl = group.get(key);
            if (abstractControl instanceof FormGroup) {
                this.logKeyValuePairs(abstractControl);
            } else {
                console.log('Key : ', key, ' Value : ', abstractControl.value);
            }
        });
    }

    logValidationErrors(group: FormGroup = this.categoryForm): void {
        Object.keys(group.controls).forEach((key: string) => {
            const abstractControl = group.get(key);
            if (abstractControl instanceof FormGroup) {
                this.logValidationErrors(abstractControl);
            } else {
                // abstractControl.markAsDirty();
                this.formErrors[key] = '';
                if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty || abstractControl.value !== '')) {
                    const messages = this.validationMessage[key];
                    // console.log('Validation Messages : ', messages);
                    // console.log('Validation Messages : ', abstractControl.errors);
                    for (const erroryKey in abstractControl.errors) {
                        if (erroryKey) {
                            this.formErrors[key] += messages[erroryKey] + ' ';
                        }
                    }
                }
            }//else
        });
    }


    onContactPreferenceChange(seletedValue: string) {
        const phoneControl = this.categoryForm.get('phone');
        if (seletedValue === 'phone') {
            phoneControl.setValidators(Validators.required);
        } else {
            phoneControl.clearValidators();
        }//else
        phoneControl.updateValueAndValidity();
    }
    getCategoryDetailsById(categoryId: number) {
        console.log('[create.category.component][getCategoryDetailsById] categoryId : ', categoryId);
        this.categoryService.getCategoryDetailsById(categoryId).subscribe(
            (category: Category) => {
                this.editCategory(category),
                    this.category = category
            },
            (err: any) => console.log(err));
    }

    editCategory(category: Category) {
        console.log('[create.category.component][editCategory] category : ', category);
        this.categoryForm.patchValue({
            categoryId: category.categoryId,
            name: category.name,
            email: 'ch_harikiran@yahoo.com',
            contactPreference: 'phone',
            skills: {
                skillName: "Java, Angular",
                experienceInYears: "12 Years",
                proficiency: "advanced"
            },
            phone: '9247255458',
            selectedCategory: category.categoryId
        });
    }

    update() {
        console.log('[category.component] [update]', this.category);
        this.mapFormValuesToCategory();
        this.categoryService.updateCategory(this.category).subscribe(
            () => this.router.navigate(['/category']),
            (err) => console.log(err)
        );
    }
    mapFormValuesToCategory() {
        console.log('[category.component] [mapFormValuesToCategory] categoryId : ', this.categoryForm.value.categoryId);
        this.category.name = this.categoryForm.value.name;
        this.category.categoryId = this.categoryForm.value.categoryId;
    }
    selectedCat() {
        console.log("Selected Category : ", this.categoryForm.value.selectedCategory);
    }
}//class

function emailDomain(control: AbstractControl): { [key: string]: any } | null {
    const email: string = control.value;
    const domain = email.substring(email.lastIndexOf('@') + 1);
    if (email === '' || domain.toLowerCase() === 'intl.att.com') {
        return null;
    } else {
        return { 'emailDomain': true };
    }
}

function matchEmail(group: AbstractControl): { [key: string]: any } | null {
    const emailControl = group.get('email');
    const confirmEmailControl = group.get('confirmEmail');
    if (emailControl.value === confirmEmailControl.value ||
        (confirmEmailControl.pristine && confirmEmailControl.value !== '')) {
        return null;
    } else {
        return { 'emailMismatch': true };
    }
}//function
