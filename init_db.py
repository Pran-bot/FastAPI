from database import engine,Base
from models import User,Order,Pizza


Base.metadata.create_all(bind=engine)