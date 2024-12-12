using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using Microsoft.AspNetCore.Identity;

namespace API.Data
{
    public static class DbInitializer
    {
        public static async Task Initialize(StoreContext context, UserManager<User> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new User
                {
                    UserName = "bob",
                    Email = "bob@test.com"
                };

                await userManager.CreateAsync(user, "Pa$$w0rd");
                await userManager.AddToRoleAsync(user, "Member");

                var admin = new User
                {
                    UserName = "admin",
                    Email = "admin@test.com"
                };

                await userManager.CreateAsync(admin, "Pa$$w0rd");
                await userManager.AddToRolesAsync(admin, new[] {"Member", "Admin"});
            }

            if (context.Products.Any()) return;

            var products = new List<Product>
            {
                new Product
                {
                    Name = "Speedster Board 2000",
                    Description =
                        "Lorem ipsum dolor sit amet",
                    Price = 2000,
                    PictureUrl = "/images/products/ski1.png",
                    Brand = "Rose",
                    Type = "Boards",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Green Board 3000",
                    Description = "Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.",
                    Price = 1500,
                    PictureUrl = "/images/products/ski2.png",
                    Brand = "Green",
                    Type = "Boards",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Core Board Speed Rush 3",
                    Description =
                        "Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
                    Price = 1800,
                    PictureUrl = "/images/products/ski3.png",
                    Brand = "Speed",
                    Type = "Boards",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Blue Super Board",
                    Description =
                        "Pellentesque habitant morbi.",
                    Price = 3000,
                    PictureUrl = "/images/products/ski4.png",
                    Brand = "Blue",
                    Type = "Boards",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Board Super Whizzy Fast",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                    Price = 2500,
                    PictureUrl = "/images/products/ski5.png",
                    Brand = "Brown",
                    Type = "Boards",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Entry Board",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                    Price = 1200,
                    PictureUrl = "/images/products/ski6.png",
                    Brand = "Entry",
                    Type = "Boards",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Core Blue Hat",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                    Price = 100,
                    PictureUrl = "/images/products/pic2.png",
                    Brand = "Red",
                    Type = "Hats",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Green Woolen Hat",
                    Description =
                        "Pellentesque habitant morbi.",
                    Price = 800,
                    PictureUrl = "/images/products/pic3.png",
                    Brand = "Wool",
                    Type = "Hats",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Purple Woolen Hat",
                    Description =
                        "Pellentesque habitant morbi.",
                    Price = 150,
                    PictureUrl = "/images/products/hat.png",
                    Brand = "Purple",
                    Type = "Hats",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Blue Code Board",
                    Description =
                        "Pellentesque habitant morbi.",
                    Price = 1800,
                    PictureUrl = "/images/products/pic4.png",
                    Brand = "VS",
                    Type = "Board",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Green Code Gloves",
                    Description =
                        "Pellentesque habitant morbi.",
                    Price = 150,
                    PictureUrl = "/images/products/pic5.png",
                    Brand = "VS Code",
                    Type = "Gloves",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Purple React Gloves",
                    Description =
                        "Pellentesque habitant morbi.",
                    Price = 160,
                    PictureUrl = "/images/products/pic6.png",
                    Brand = "React",
                    Type = "Gloves",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Green React Gloves",
                    Description =
                        "Pellentesque habitant morbi.",
                    Price = 140,
                    PictureUrl = "/images/products/pic7.png",
                    Brand = "React",
                    Type = "Gloves",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Redis Green Boots",
                    Description =
                        "Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
                    Price = 2500,
                    PictureUrl = "/images/products/buty1.png",
                    Brand = "Redis",
                    Type = "Boots",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Core Grey Boots",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                    Price = 1899,
                    PictureUrl = "/images/products/buty2.png",
                    Brand = "NetCore",
                    Type = "Boots",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Core Black Boots",
                    Description =
                        "Pellentesque habitant morbi tristique senectus.",
                    Price = 1999,
                    PictureUrl = "/images/products/buty3.png",
                    Brand = "NetCore",
                    Type = "Boots",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Angular Blue Boots",
                    Description = "Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.",
                    Price = 1500,
                    PictureUrl = "/images/products/buty4.png",
                    Brand = "Angular",
                    Type = "Boots",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Angular White Boots",
                    Description =
                        "Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
                    Price = 1800,
                    PictureUrl = "/images/products/buty6.png",
                    Brand = "Angular",
                    Type = "Boots",
                    QuantityInStock = 100
                },
            };

            foreach (var product in products)
            {
                context.Products.Add(product);
            }

            context.SaveChanges();
        }
    }
}