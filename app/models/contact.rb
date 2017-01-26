class Contact
  include ActiveAttr::Model

  attribute :name
  attribute :email
  attribute :message
  attribute :subject

  validates_presence_of :name, :minimum => 2
  validates_format_of :email, :with => /[-a-z0-9_+\.]+\@([-a-z0-9]+\.)+[a-z0-9]{2,4}/i
  validates_length_of :message, :maximum => 1000, :minimum => 2
end
