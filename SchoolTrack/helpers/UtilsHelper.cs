using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SchoolTrack.Models.Enums;

namespace SchoolTrack.helpers;

public static class UtilsHelper
{    
    public static string[] GetRoles(RolesEnum[] roles){
        List<string> rolesList = [];
        foreach (var role in roles)
        {
            rolesList.Add(role.ToString().ToLower());
        }
        return [.. rolesList];
    }
}
