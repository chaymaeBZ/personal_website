class ContactMailer < ApplicationMailer
  def contact_email(contact)
    @contact = contact
    mail(to: "bazzaoui.chaymae@gmail.com", subject: contact.subject)
  end
end
