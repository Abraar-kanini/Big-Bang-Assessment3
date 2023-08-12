using System.ComponentModel.DataAnnotations;

namespace Big_Bang3_Assessment.Model
{
    public class User
    {
        [Key]
        public int User_Id { get; set; }

        [StringLength(8, ErrorMessage = "The User_Name must be at most 8 characters long.")]
        public string User_Name { get; set; }

        [EmailAddress(ErrorMessage = "Invalid email format.")]
        public string User_Email { get; set; }

        [RegularExpression(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$",
                           ErrorMessage = "The User_Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one special character.")]
        public string User_Password { get; set; }

        public string User_Phone { get; set; }
        public string User_Gender { get; set; }
        public string User_Location { get; set; }

        public ICollection<Booking> bookings { get; set; }
        public ICollection<FeedBack> feedBacks { get; set; }
    }
}
