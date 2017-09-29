# Specifications for the Rails Assessment

Specs:
- [x] Using Ruby on Rails for the project
- [x] Include at least one has_many relationship (User has_many Cats)
- [x] Include at least one belongs_to relationship (Cats belong_to User)
- [x] Include at least one has_many through relationship (Cat has_many Tricks through CatTricks)
- [X] The "through" part of the has_many through includes at least one user submittable attribute (trick_attributes)
- [X] Include reasonable validations for simple model objects (Cat and Tricks both require names)
- [ ] Include a class level ActiveRecord scope method (model object & class method name and URL to see the working feature e.g. User.most_recipes URL: /users/most_recipes)
- [x] Include a nested form writing to an associated model using a custom attribute writer (Custom writer for trick_attribute)
- [x] Include signup (Devise)
- [x] Include login (Devise)
- [x] Include logout (Devise)
- [C] Include third party signup/login (OmniAuth Facebook)
- [ ] Include nested resource show or index (URL e.g. users/2/recipes)
- [ ] Include nested resource "new" form (URL e.g. recipes/1/ingredients)
- [ ] Include form display of validation errors (form URL e.g. /recipes/new)

Confirm:
- [ ] The application is pretty DRY
- [ ] Limited logic in controllers
- [ ] Views use helper methods if appropriate
- [ ] Views use partials if appropriate
