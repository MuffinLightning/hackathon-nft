public static class Data {
    private static Dictionary<string, Response> _tokenBenefits = new Dictionary<string, Response>{
        {"Bov9mSM32MFfWBNmpBEoAbKZ3Q7npqZZjjgYJjXNMNve", new Response{Name = "Subway", Benefits = new List<string> {"10% off subway"} }},
        {"9351jpcXuxisJguig1vDTR12MAUTkXS7LNDb7mwmWTA7", new Response{Name = "Lyft", Benefits = new List<string> {"15% off your Lyft rides"} }}
    };

    public static Response GetBenefitsByTokenAddress(string tokenAddress){
        return _tokenBenefits[tokenAddress];
    }
}

public class Response{
    public string Name { get; set; } = string.Empty;

    public List<string>? Benefits { get; set; }
}