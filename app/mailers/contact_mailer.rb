class ContactMailer < ApplicationMailer
  def contact_email(@contact)
    mail(to: "bazzaoui.chaymae@gmail.com", subject: @contact.subject)
  end
end
