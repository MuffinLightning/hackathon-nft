public static class Data {
    private static Dictionary<string, Response> _tokenBenefits = new Dictionary<string, Response>{
        {"EAS1kfpgmLRo5WAZdJgpCzZtY6ak44pVsT3DxoeeQWfx", 
            new Response{Name = "Hilton Gold", Benefits = new List<string> {"Fifth night free", "Free bottled water" } }},
        {"3DtohyN3EQyBkie4zuyyprmCFZLDrvpohs1xxqyyh8GF", 
            new Response{Name = "Hilton Diamond", Benefits = new List<string> {"Premium WiFi", "Space-available room upgrades"} }},
        {"G5VzDcc7PoNMzz4oubCC2tppSPphjkmDeZXJFPv3vEWb", 
            new Response{Name = "Lyft", Benefits = new List<string> {"5% discount"} }}
    };

    public static Response GetBenefitsByTokenAddress(string tokenAddress){
        return _tokenBenefits[tokenAddress];
    }
}

public class Response{
    public string Name { get; set; } = string.Empty;

    public List<string>? Benefits { get; set; }
}