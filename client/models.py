from django.contrib.auth import get_user_model
from django.db import models
# from django.contrib.auth.models import User
from phonenumber_field.modelfields import PhoneNumberField
from users.models import User
#AppUser = get_user_model()



class Client(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE)
  

    def __str__(self):
        return self.user.username


class Child(models.Model):
    parent = models.ForeignKey(
        User, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length = 254)
    phone = models.CharField(null=False, blank=False, unique=False, max_length=200)
    D_O_B = models.DateField(null=False, blank=False, unique=False)
    timestamp = models.DateTimeField(auto_now_add=True,blank=True,)
    paid = models.BooleanField(default=False) 
    upfile = models.BooleanField(default=False) 
    testres = models.BooleanField(default=False) 
    
    def __str__(self):
        return self.name


class Result(models.Model):
    child = models.ForeignKey(
        Child, on_delete=models.CASCADE)
    title = models.CharField(max_length=250)
    explain = models.CharField(max_length=450,default='')
    tip = models.CharField(max_length=450,default='')
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.child.name


class Files(models.Model):
    child = models.ForeignKey(Child, on_delete=models.CASCADE)
    file = models.FileField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
       
        return  "{} {}".format(self.child.name, str(self.timestamp))
    
class Appointment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    professional = models.CharField(max_length=25)
    amount = models.CharField(max_length=5)
    completed = models.BooleanField(default=False) 
    timestamp = models.DateTimeField(auto_now_add=True)
    

    def __str__(self):
        return self.user.username
    


