using System;
using Domain;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Persistence;

namespace API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = CreateWebHostBuilder(args).Build();
            
            using (var scope = host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                try 
                
                {
                    var context = services.GetRequiredService<DataContext>();
                    var userManager = services.GetRequiredService<UserManager<AppUser>>();
                    context.Database.Migrate();  //This code creates th databse if it doesn't exist


                    Seed.SeedData(context, userManager).Wait();
                }
                catch (Exception ex)
                {
                    var logger = services.GetRequiredService<ILogger<Program>>(); //gets e required service and will log from the Program class
                    logger.LogError(ex, "An error occured during migration");
                }
            }

            host.Run();// se pasó hasta acá porque estaba en el createwehost builder para que hiciera la base de datos primero y luego ya correrlo
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
    }
}
