using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var users = new List<AppUser>
                {
                    new AppUser
                    {
                        DisplayName = "Bob",
                        UserName = "bob",
                        Email = "bob@test.com"
                    },
                    new AppUser
                    {
                        DisplayName = "Tom",
                        UserName = "tom",
                        Email = "tom@test.com"
                    },
                    new AppUser
                    {
                        DisplayName = "Jane",
                        UserName = "jane",
                        Email = "jane@test.com"
                    }
                };

                foreach (var user in users) 
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                }
            }

            if (!context.Products.Any())
            {
                var products = new List<Product>
                {
                    new Product
                    {
                        Title = "Past Product 1",
                        Description = "Product 2 months ago",
                        Category = "drinks",
                    },
                    new Product
                    {
                        Title = "Past Product 2",
                        Description = "Product 1 month ago",
                        Category = "culture",
                    },
                    new Product
                    {
                        Title = "Future Product 1",
                        Description = "Product 1 month in future",
                        Category = "culture",
                    },
                    new Product
                    {
                        Title = "Future Product 2",
                        Description = "Product 2 months in future",
                        Category = "music",
                    },
                    new Product
                    {
                        Title = "Future Product 3",
                        Description = "Product 3 months in future",
                        Category = "drinks",
                    },
                    new Product
                    {
                        Title = "Future Product 4",
                        Description = "Product 4 months in future",
                        Category = "drinks",
                    },
                    new Product
                    {
                        Title = "Future Product 5",
                        Description = "Product 5 months in future",
                        Category = "drinks",
                    },
                    new Product
                    {
                        Title = "Future Product 6",
                        Description = "Product 6 months in future",
                        Category = "music",
                    },
                    new Product
                    {
                        Title = "Future Product 7",
                        Description = "Product 2 months ago",
                        Category = "travel",
                    },
                    new Product
                    {
                        Title = "Future Product 8",
                        Description = "Product 8 months in future",
                        Category = "film",
                    }
                };

                context.Products.AddRange(products);
                context.SaveChanges();
            }
        }
    }
}