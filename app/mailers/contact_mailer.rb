class ContactMailer < ApplicationMailer
  def contact_email(name, email, subject, message)

    mail(to: "bazzaoui.chaymae@gmail.com", subject: subject)
  end
end
