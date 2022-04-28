public class Token
{
    public string? TokenAddress { get; set; }
    public TokenAmount? TokenAmount { get; set; }
    public string? TokenAccount { get; set; }
    public long Lamports { get; set; }
}

public class TokenAmount
{
    public double Amount { get; set; }
    public int Decimals { get; set; }
}

public class TokenResponse
{
    public bool Success { get; set; }
    public List<Token>? Data { get; set; }
}
