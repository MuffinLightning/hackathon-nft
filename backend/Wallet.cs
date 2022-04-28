using System.Net;

public static class Wallet{
    private static HttpClient _httpClient = new HttpClient();
    public static async Task<IEnumerable<Token>?> GetTokens(string walletAddress){
        var httpRequestMessage = new HttpRequestMessage
        {
            Method = HttpMethod.Get,
            RequestUri = new Uri($"https://api-devnet.solscan.io/account/tokens?address={walletAddress}&price=1"),
            Headers =
            {
                { "user-agent", "vscode-restclient" },
            },
        };
        var response = await _httpClient.SendAsync(httpRequestMessage);
        response.EnsureSuccessStatusCode();
        var body = await response.Content.ReadFromJsonAsync<TokenResponse>();
        
        return body?.Data?.Where(t=>t.TokenAmount?.Amount > 0);
    }
}