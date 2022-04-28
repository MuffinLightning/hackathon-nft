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

app.MapGet("/benefits/{walletId}/{storeId?}", async (string walletId, string? storeId) =>
    {
        var tokens = await Wallet.GetTokens(walletId);
        
        return tokens?.Select(t=> Data.GetBenefitsByTokenAddress(t.TokenAddress!));
    }
);

app.Run();