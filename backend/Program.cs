var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors();

var app = builder.Build();
app.UseCors(builder =>
{
    builder
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader();
});

app.MapGet("/benefits/{walletId}/{storeId?}", (string walletId, string? storeId) =>
    {
        var result = new List<Response>{
            new Response{
                Name = "NFT1",
                Benefits = new List<string>{
                    "Subway $5 off",
                    "McDonalds free cone"
                }
            },
            new Response{
                Name = "NFT2",
                Benefits = new List<string>{
                    "Lyft 10%",
                    "Hilton 20%"
                }
            }
        };
        
        return result;
    }
);

app.Run();


public class Response{
    public string Name { get; set; } = string.Empty;

    public List<string>? Benefits { get; set; }
}
