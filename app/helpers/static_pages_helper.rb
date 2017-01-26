module StaticPagesHelper
  def home_path
    {controller: "static_pages", action: "index"}
  end
end
