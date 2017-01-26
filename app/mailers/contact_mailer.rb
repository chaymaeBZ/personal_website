class ContactMailer < ApplicationMailer
  def welcome_email()

    mail(to: "bazzaoui.chaymae@gmail.com", subject: 'Welcome to My Awesome Site')
  end
end
