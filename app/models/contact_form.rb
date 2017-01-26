class ContactForm < MailForm::Base
  

  # Declare the e-mail headers. It accepts anything the mail method
  # in ActionMailer accepts.
  def headers
    {
      :subject => "My Contact Form",
      :to => "bazzaoui.chaymae@gmail.com",
      :from => %("#{name}" <#{email}>)
    }
  end
end
