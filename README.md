# yttags

Local development:
* Run `python manage.py runserver` in one termainal and `cd client && yarn run start` in another. Then go to localhost:8000
* To run with production settings, run `cd client && yarn run build && cd .. && python manage.py runserver --settings=yttags.prod_settings`. Then go to localhost:8000