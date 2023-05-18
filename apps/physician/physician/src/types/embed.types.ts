type DecodedIdToken = {
  aud: string;
  partnerId: string;
};

type EmbedUserDetails = {
  id: string;
  oktaCreds: string;
  oktaUsername: string;
  partnerId: string;
  sukiOrganizationId: string;
  sukiUserId: string;
  tenantName: string;
};

export { DecodedIdToken, EmbedUserDetails };
